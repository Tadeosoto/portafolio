import { motion } from "framer-motion";

/**
 * Solo transform (translateX) — sin animar `width` para evitar CLS.
 * `initial={false}` evita el barrido en la primera pintura y en cada entrada
 * (el LCP ya ocurrió); las salidas entre rutas siguen usando `exit`.
 */
const transitionVariants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: "-100%",
  },
  exit: {
    x: "100%",
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed inset-0 z-30 h-screen w-screen bg-[#2e2257] will-change-transform"
        variants={transitionVariants}
        initial={false}
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed inset-0 z-20 h-screen w-screen bg-[#3b2d71] will-change-transform"
        variants={transitionVariants}
        initial={false}
        animate="animate"
        exit="exit"
        transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed inset-0 z-10 h-screen w-screen bg-[#4b3792] will-change-transform"
        variants={transitionVariants}
        initial={false}
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
      />
    </>
  );
};

export default Transition;
