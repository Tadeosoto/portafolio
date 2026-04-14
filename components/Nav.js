import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";

import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export const navLinksConfig = [
  { key: "home", path: "/", icon: HiHome },
  { key: "about", path: "/sobremi", icon: HiUser },
  { key: "services", path: "/servicios", icon: HiRectangleGroup },
  { key: "work", path: "/proyectos", icon: HiViewColumns },
  { key: "contact", path: "/contacto", icon: HiEnvelope },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const { t } = useTranslation("common");

  return (
    <nav
      aria-label={t("nav.landmark")}
      className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen"
    >
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0  h-[70px]  xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navLinksConfig.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              className={`${
                link.path === pathname && "text-blue-600"
              } relative flex items-center group hover:text-blue-600 transition-all duration-300`}
              href={link.path}
              key={link.key}
              aria-current={link.path === pathname ? "page" : undefined}
            >
              <span className="sr-only">{t(`nav.${link.key}`)}</span>
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {t(`nav.${link.key}`)}
                  </div>
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              <div>
                <Icon aria-hidden />
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
