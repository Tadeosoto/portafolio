import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { useTranslation } from "next-i18next";

const ProjectsBtn = () => {
  const { t } = useTranslation("common");

  return (
    <div className="mx-auto xl:mx-0">
      <Link href="/proyectos" legacyBehavior>
        <a
          className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-no-repeat group"
          style={{ zIndex: 9 }}
          aria-label={t("home.projectsBtnAria")}
        >
          <Image
            src="/rounded-text2.png"
            width={141}
            height={148}
            alt=""
            sizes="(max-width: 768px) 120px, 141px"
            className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
          />
          <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
        </a>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
