//Fonts

import { Sora } from "@next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// Componentes
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";
import Seo from "../components/Seo";
import SkipToContent from "../components/SkipToContent";

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <Seo />
      <SkipToContent />
      <TopLeftImg />
      <Nav />
      <Header />
      {/* Espacio a la derecha en desktop para que el nav fijo no tape el contenido */}
      <main
        id="main-content"
        tabIndex={-1}
        className="h-full min-h-0 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary max-lg:pb-28 max-lg:h-auto xl:pr-24 2xl:pr-32"
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
