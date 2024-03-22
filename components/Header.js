// next image
import Image from "next/image";

// next link

import Link from "next/link";

//componentes

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 py-8">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src={"/logoTadeoSoto.png"}
              width={189}
              height={70}
              alt=""
              priority={true}
            />
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
