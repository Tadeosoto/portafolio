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
          <h1 className="h1">
            Transformando tus ideas <br /> a la{" "}
            <span className="text-blue-600"> realidad digital</span>
          </h1>
          {/*  sub-titulo */}
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium aperiam eos magnam eum minima, autem culpa mollitia
            dolorem id sequi?
          </p>
          {/* boton */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
        </div>
      </div>
      {/* aqui va la imagen */}
      <div>imagen</div>
    </div>
  );
};

export default Home;
