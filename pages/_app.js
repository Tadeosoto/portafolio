import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { appWithTranslation } from "next-i18next";

import Layout from "../components/Layout";
import Transition from "../components/Transition";

import { useRouter } from "next/router";
import nextI18NextConfig from "../next-i18next.config.js";

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

export default appWithTranslation(MyApp, nextI18NextConfig);
