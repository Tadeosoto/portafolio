/**
 * Lossless PNG recompression (zlib level 9 + adaptive filtering via sharp/libvips).
 * Run after adding/replacing assets: npm run optimize:pngs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

async function optimizeFile(filePath) {
  const before = fs.statSync(filePath).size;
  const buf = fs.readFileSync(filePath);
  const out = await sharp(buf)
    .png({
      compressionLevel: 9,
      adaptiveFiltering: true,
    })
    .toBuffer();
  if (out.length < before) {
    fs.writeFileSync(filePath, out);
    console.log(
      `${path.basename(filePath)}: ${before} → ${out.length} bytes (−${(
        ((before - out.length) / before) *
        100
      ).toFixed(1)}%)`
    );
  } else {
    console.log(`${path.basename(filePath)}: already optimal (${before} bytes)`);
  }
}

/** Ensures URL `/avatar4.png` works on case-sensitive hosts (Linux). */
function renameAvatarToLowercase() {
  const files = fs.readdirSync(publicDir);
  const match = files.find((f) => /^avatar4\.png$/i.test(f));
  if (!match || match === "avatar4.png") return;
  const from = path.join(publicDir, match);
  const tmp = path.join(publicDir, "__avatar_rename_tmp.png");
  const to = path.join(publicDir, "avatar4.png");
  fs.renameSync(from, tmp);
  fs.renameSync(tmp, to);
  console.log(`Renamed ${match} → avatar4.png`);
}

async function main() {
  const entries = fs.readdirSync(publicDir, { withFileTypes: true });
  const pngs = entries
    .filter((e) => e.isFile() && /\.png$/i.test(e.name))
    .map((e) => path.join(publicDir, e.name));

  if (pngs.length === 0) {
    console.log("No PNG files in public/");
    return;
  }

  for (const filePath of pngs) {
    await optimizeFile(filePath);
  }

  renameAvatarToLowercase();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
