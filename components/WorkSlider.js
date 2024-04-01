// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

// import swiper react components

import { Swiper, SwiperSlide } from "swiper/react";

//swiper stykes

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//modulos requeriros

import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";
// next Image
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[600px]"
    >
      {workSlides.slides.map((slide, slideIndex) => {
        return (
          <SwiperSlide key={`slide-${slideIndex}`}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, imageIndex) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={`image-${slideIndex}-${imageIndex}`}
                  >
                    <div
                      className="flex items-center justify-center relative overflow-hidden group"
                      // key={index}
                    >
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#2563eb] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/*  title*/}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* parte 1 */}
                          <div className="delay-100">VER</div>
                          {/* parte 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROYECTO
                          </div>
                          {/* icono */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
