// imagen next

import Image from "next/image";

// componentes

import ParticleContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";

// Variants

import { fadeIn } from "../variants";
const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/*  texto*/}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* titulo */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Diseño web <br /> que hace
            <span className="text-blue-600"> click.</span>
          </motion.h1>
          {/*  sub-titulo */}
          <motion.p
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            En cada proyecto, buscamos fusionar diseño intuitivo con
            funcionalidad impecable, creando soluciones web que no solo capturan
            la atención, sino que también impulsan resultados. Confía en
            nosotros para llevar tu idea al siguiente nivel digital.
          </motion.p>
          {/* boton */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* aqui va la imagen */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge transalte-z-0"></div>
        {/* particulas */}
        <ParticleContainer />
        {/* imagen avatar */}
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[711px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%] miguelito"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
