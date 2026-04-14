import Image from "next/image";
import { useTranslation } from "next-i18next";

const Avatar = ({ priority = false }) => {
  const { t } = useTranslation("common");

  return (
    <div className="hidden xl:flex xl:max-w-none ">
      <Image
        src="/avatar4.png"
        width={711}
        height={678}
        priority={priority}
        fetchPriority="low"
        sizes="(max-width: 1199px) 0px, (max-width: 1440px) 50vw, 711px"
        alt={t("avatarAlt")}
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
