import Circles from "../../components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Contact = () => {
  const form = useRef();
  const { t } = useTranslation("common");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_j9nneo8", "template_p6qje0v", form.current, {
        publicKey: "TaoEEM9WLkWCObiPU",
      })
      .then(
        () => {},
        () => {},
      );
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full px-4">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            {t("contact.title")}{" "}
            <span className="text-accent">{t("contact.titleAccent")}</span>
          </motion.h2>
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full flex-col sm:flex-row">
              <div className="w-full flex flex-col gap-2 text-left">
                <label htmlFor="contact-name" className="sr-only">
                  {t("contact.nameLabel")}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder={t("contact.name")}
                  className="input"
                  name="user_name"
                  autoComplete="name"
                />
              </div>
              <div className="w-full flex flex-col gap-2 text-left">
                <label htmlFor="contact-email" className="sr-only">
                  {t("contact.emailLabel")}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder={t("contact.email")}
                  className="input"
                  name="user_email"
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 text-left w-full">
              <label htmlFor="contact-message" className="sr-only">
                {t("contact.messageLabel")}
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder={t("contact.message")}
                className="textarea"
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              value="send"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {t("contact.submit")}
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
      <Circles />
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Contact;
