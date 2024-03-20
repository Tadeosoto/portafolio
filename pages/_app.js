import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";

// componentes aqui

import Layout from "../components/Layout";
import Transition from "../components/Transition";

// Router

import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
