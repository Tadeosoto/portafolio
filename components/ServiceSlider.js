// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// import swiper react components

import { Swiper, SwiperSlide } from "swiper/react";

//swiper stykes

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//modulos requeriros

import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Gestion de marca",
    description:
      "Optimizando y fortaleciendo la identidad y percepción de tu marca.",
  },
  {
    icon: <RxPencil2 />,
    title: "Diseño",
    description:
      "sitios web impactantes y funcionales para tus necesidades digitales.",
  },
  {
    icon: <RxDesktop />,
    title: "Desarrollo",
    description:
      "Desarrollando soluciones web personalizadas y eficientes para tu negocio.",
  },

  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "Mejorando la visibilidad y el posicionamiento orgánico de tu sitio web.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[#412f7b26] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[#5941a926] transition-all duration-300">
              {/* icono */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* titulo y desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* flechita */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;

// segundo 1:59:03 del VIDEO
