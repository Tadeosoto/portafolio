import Link from "next/link";

import { RiGithubFill, RiLinkedinFill, RiWhatsappFill } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href="https://github.com/Tadeosoto"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 transition-all duration-300"
        aria-label="GitHub"
      >
        <RiGithubFill />
      </Link>
      <Link
        href="https://www.linkedin.com/in/tadeo-soto/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 transition-all duration-300"
        aria-label="LinkedIn"
      >
        <RiLinkedinFill />
      </Link>
      <Link
        href="https://wa.me/523312393317"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 transition-all duration-300"
        aria-label="WhatsApp"
      >
        <RiWhatsappFill color="green" />
      </Link>
    </div>
  );
};

export default Socials;
