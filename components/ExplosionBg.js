import Image from "next/image";

/**
 * Mismo efecto que xl:bg-explosion + cover + right + mix-blend-color-dodge,
 * pero servido vía next/image (WebP/AVIF, srcset, sizes).
 * hidden xl:block evita pintar por debajo del breakpoint xl.
 */
const ExplosionBg = () => {
  return (
    <div
      className="hidden xl:block absolute inset-0 z-0 mix-blend-color-dodge pointer-events-none"
      aria-hidden
    >
      <Image
        src="/bg-explosion.png"
        alt=""
        fill
        className="object-cover object-right"
        sizes="(max-width: 1199px) 0px, 1200px"
        quality={90}
      />
    </div>
  );
};

export default ExplosionBg;
