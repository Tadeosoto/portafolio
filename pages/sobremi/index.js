import React, { useState } from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiJquery,
  SiVercel,
  SiCloudflare,
  SiGithub,
  SiFramer,
  SiOpenai,
  SiJavascript,
} from "react-icons/si";
import { MdSpeed, MdSchool } from "react-icons/md";
import { RiLayoutGridLine } from "react-icons/ri";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const SKILL_ICON_GROUPS = [
  [
    FaReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    FaHtml5,
    FaCss3,
    SiTailwindcss,
    SiSass,
    SiRedux,
    SiJquery,
    SiFramer,
  ],
  [SiNodedotjs, SiExpress, FaPython, SiMongodb, SiPostgresql],
  [FaJs, FaReact],
  [RiLayoutGridLine],
  [MdSpeed],
  [FaGitAlt, SiGithub, SiVercel, SiCloudflare],
  [SiOpenai],
];

const About = () => {
  const [index, setIndex] = useState(0);
  const { t: tc } = useTranslation("common");
  const { t: ta } = useTranslation("about");

  const skills = ta("skills", { returnObjects: true }) || [];
  const jobs = ta("jobs", { returnObjects: true }) || [];
  const projectsBlock = ta("projectsBlock", { returnObjects: true });
  const education = ta("education", { returnObjects: true });
  const training = ta("training", { returnObjects: true });

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px] miguelito"
      >
        <Avatar priority />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 px-4 xl:px-0">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            {tc("about.hero.line1")}
            <span className="text-blue-600">{tc("about.hero.accent1")}</span>
            {tc("about.hero.line2")}
            <span className="text-blue-600">{tc("about.hero.accent2")}</span>
            {tc("about.hero.line3")}
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 text-white/70 text-sm xl:text-base leading-relaxed"
          >
            {ta("summary")}
          </motion.p>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[52%] min-h-0 max-h-[min(560px,70vh)] xl:max-h-[min(640px,75vh)]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 shrink-0">
            <button
              type="button"
              className={`${
                index === 0 &&
                "text-accent after:w-[100%] after:bg-blue-600 after:transition-all after:duration-300"
              } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 bg-transparent border-0 p-0 font-inherit`}
              onClick={() => setIndex(0)}
            >
              {tc("about.tabs.skills")}
            </button>
            <button
              type="button"
              className={`${
                index === 1 &&
                "text-accent after:w-[100%] after:bg-blue-600 after:transition-all after:duration-300"
              } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 bg-transparent border-0 p-0 font-inherit`}
              onClick={() => setIndex(1)}
            >
              {tc("about.tabs.credentials")}
            </button>
          </div>

          <div className="py-2 xl:py-4 flex-1 overflow-y-auto overflow-x-hidden pr-1 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            {index === 0 && (
              <div className="flex flex-col gap-y-6 items-stretch text-left">
                {Array.isArray(skills) &&
                  skills.map((group, gi) => {
                    const icons = SKILL_ICON_GROUPS[gi] || [];
                    return (
                      <div key={group.category}>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2">
                          <span className="text-white font-medium text-sm xl:text-base">
                            {group.category}
                          </span>
                          <span className="hidden sm:inline text-white/30">
                            ·
                          </span>
                          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xl text-white/90">
                            {icons.map((Icon, i) => (
                              <span
                                key={`${group.category}-icon-${i}`}
                                className="inline-flex"
                                aria-hidden
                              >
                                <Icon />
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">
                          {group.detail}
                        </p>
                      </div>
                    );
                  })}
              </div>
            )}

            {index === 1 && (
              <div className="flex flex-col gap-y-6 items-stretch text-left">
                {Array.isArray(jobs) &&
                  jobs.map((block, ji) => (
                    <div key={`${block.company}-${ji}`}>
                      <div className="text-white font-medium">
                        {block.company}{" "}
                        <span className="text-white/50 font-normal">
                          — {block.role}
                        </span>
                      </div>
                      <div className="text-accent text-sm mb-2">{block.period}</div>
                      <ul className="list-disc list-outside ml-4 space-y-1.5 text-white/60 text-sm leading-relaxed">
                        {block.bullets.map((b, bi) => (
                          <li key={`${block.company}-b-${bi}`}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                {projectsBlock && (
                  <div>
                    <div className="text-white font-medium mb-2">
                      {projectsBlock.title}
                    </div>
                    <ul className="list-disc list-outside ml-4 space-y-1.5 text-white/60 text-sm leading-relaxed">
                      {projectsBlock.items.map((line, li) => (
                        <li key={`proj-${li}`}>{line}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {education && (
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
                    <MdSchool className="text-2xl text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-medium">
                        {education.title}
                      </div>
                      <div className="text-white/60 text-sm">{education.place}</div>
                    </div>
                  </div>
                )}

                {training && (
                  <div>
                    <div className="text-white font-medium mb-2">
                      {training.title}
                    </div>
                    <ul className="list-disc list-outside ml-4 space-y-1.5 text-white/60 text-sm leading-relaxed">
                      {training.items.map((line, ti) => (
                        <li key={`train-${ti}`}>{line}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "about"])),
    },
  };
}

export default About;
