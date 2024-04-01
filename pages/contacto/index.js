// componentes

import Circles from "/components/Circles";

//iconos

import { BsArrowRight } from "react-icons/bs";

// framer

import { motion } from "framer-motion";

//Variantes

import { fadeIn } from "../../variants";

// correo

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_j9nneo8", "template_p6qje0v", form.current, {
        publicKey: "TaoEEM9WLkWCObiPU",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl-text-left flex items-center justify-center h-full">
        {/* text y form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* texto */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            trabajemos <span className="text-accent">juntos!</span>
          </motion.h2>
          {/* form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/*grupo de input  */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="nombre"
                className="input"
                name="user_name"
              ></input>
              <input
                type="email"
                placeholder="correo"
                className="input"
                name="user_email"
              ></input>
            </div>

            <textarea
              name="message"
              placeholder="mensaje"
              className="textarea"
            ></textarea>
            <button
              type="submit"
              value="send"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover-opacity-0 transition-all duration-500">
                Hablemos
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
