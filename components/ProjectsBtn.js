//siguiente imagen

import Image from "next/image";

// next link

import Link from "next/link";

// iconos

import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link href={"/proyectos"} legacyBehavior>
        <a
          className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-no-repeat group"
          style={{ zIndex: 9 }}
        >
          <Image
            src={"/rounded-text2.png"}
            width={141}
            height={148}
            alt=""
            className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
          />
          <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
        </a>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
