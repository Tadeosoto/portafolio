import Link from "next/link";
import { useTranslation } from "next-i18next";

import { RiGithubFill, RiLinkedinFill, RiWhatsappFill } from "react-icons/ri";

const Socials = () => {
  const { t } = useTranslation("common");

  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href="https://github.com/Tadeosoto"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 transition-all duration-300"
        aria-label={t("social.github")}
      >
        <RiGithubFill aria-hidden />
      </Link>
      <Link
        href="https://www.linkedin.com/in/tadeo-soto/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 transition-all duration-300"
        aria-label={t("social.linkedin")}
      >
        <RiLinkedinFill aria-hidden />
      </Link>
      <Link
        href="https://wa.me/523312393317"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 transition-all duration-300"
        aria-label={t("social.whatsapp")}
      >
        <RiWhatsappFill color="green" aria-hidden />
      </Link>
    </div>
  );
};

export default Socials;
