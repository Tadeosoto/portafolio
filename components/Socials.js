import Link from "next/link";

// icons
import {
  RiInstagramLine,
  RiFacebookLine,
  RiYoutubeLine,
  RiTiktokLine,
  RiWhatsappFill,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={""}
        className="hover:text-blue-500 transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={""}
        className="hover:text-blue-500 transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      {/* <Link
        href={""}
        className="hover:text-blue-500 transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link> */}
      <Link
        href={""}
        className="hover:text-blue-500 transition-all duration-300"
      >
        <RiTiktokLine />
      </Link>
      <Link
        href={"https://wa.me/523312393317"}
        className="hover:text-blue-500 transition-all duration-300"
      >
        <RiWhatsappFill color="green" />
      </Link>
    </div>
  );
};

export default Socials;
