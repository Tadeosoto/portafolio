import React, { useState } from "react";

// icons
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";

import { SiNextdotjs, SiFramer } from "react-icons/si";

//  data
const aboutData = [
  {
    title: "Habilidades",
    info: [
      {
        title: "Desarrollo Web",
        icons: [
          <FaHtml5 key={1} />,
          <FaCss3 key={2} />,
          <FaJs key={3} />,
          <FaReact key={4} />,
          <SiNextdotjs key={5} />,
          <SiFramer key={6} />,
        ],
      },
    ],
  },
  // {
  //   title: "awards",
  //   info: [
  //     {
  //       title: "Webby Awards - Honoree",
  //       stage: "2011 - 2012",
  //     },
  //     {
  //       title: "Adobe Design Achievement Awards - Finalist",
  //       stage: "2009 - 2010",
  //     },
  //   ],
  // },
  {
    title: "experiencia",
    info: [
      // {
      //   title: "UX/UI Designer - XYZ Company",
      //   stage: "2012 - 2023",
      // },
      // {
      //   title: "Web Developer - ABC Agency",
      //   stage: "2010 - 2012",
      // },
      // {
      //   title: "Intern - DEF Corporation",
      //   stage: "2008 - 2010",
      // },
    ],
  },
  {
    title: "credenciales",
    info: [
      {
        title:
          " The Complete JavaScript Course 2023: From Zero to Expert! - Udemy",
        stage: "2023",
      },
      {
        title: "Build Responsive Real-World Websites with HTML and CSS - Udemy",
        stage: "2023",
      },
      {
        title: "Python for beginners - Learn all the basics of python - Udemy",
        stage: "2023",
      },
    ],
  },
];

//  Componentes

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px] miguelito"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* texto */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            La chucha de la <span className="text-blue-600">wea</span> esta para
            romperte la cabeza de monda.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
            aperiam rerum voluptatum aspernatur distinctio hic commodi,
            repellendus architecto exercitationem dicta.
          </motion.p>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-blue-600 after:w-[100%] after:bg-blue-600 after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* titulo */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  {/* icons */}
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

// NOS QUEDAMOS EN EL SEGUNDO 1:23:30 DEL VIDEO
