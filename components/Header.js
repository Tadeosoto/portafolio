import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import Socials from "../components/Socials";
import LanguageSwitcher from "../components/LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation("common");

  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 py-8">
          <Link href="/">
            <Image
              src="/logoTadeoSoto.png"
              width={189}
              height={70}
              alt={t("header.logoAlt")}
              sizes="(max-width: 768px) 140px, 189px"
              priority
              fetchPriority="high"
            />
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:gap-x-6">
            <Socials />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
