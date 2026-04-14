import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxMagnifyingGlass,
  RxUpdate,
  RxArrowTopRight,
} from "react-icons/rx";
import { MdSpeed } from "react-icons/md";
import {
  HiOutlineServerStack,
  HiOutlineShoppingBag,
} from "react-icons/hi2";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { useTranslation } from "next-i18next";
import { useMemo } from "react";

function chunkServices(items, size) {
  const pages = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }
  return pages;
}

const SERVICE_ICONS = [
  RxCrop,
  RxPencil2,
  RxDesktop,
  MdSpeed,
  HiOutlineServerStack,
  RxMagnifyingGlass,
  RxReader,
  HiOutlineShoppingBag,
  RxUpdate,
];

const ServiceSlider = () => {
  const { t } = useTranslation("services");

  const services = useMemo(() => {
    const items = t("items", { returnObjects: true });
    if (!Array.isArray(items)) return [];
    return items.map((item, i) => ({
      ...item,
      Icon: SERVICE_ICONS[i],
    }));
  }, [t]);

  const pages = useMemo(
    () => chunkServices(services, 3),
    [services]
  );

  return (
    <Swiper
      className="service-slider-swiper w-full max-w-full overflow-hidden py-1"
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={0}
      autoHeight
      watchOverflow
      resistanceRatio={0}
      rewind={pages.length > 1}
      autoplay={
        pages.length > 1
          ? {
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }
          : false
      }
      pagination={{ clickable: true }}
    >
      {pages.map((page, pageIndex) => (
        <SwiperSlide
          key={`service-page-${pageIndex}`}
          className="!box-border !h-auto !w-full shrink-0"
        >
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.map((item, i) => {
              const Icon = item.Icon;
              return (
                <div
                  key={`${item.title}-${pageIndex}-${i}`}
                  className="group bg-[#412f7b26] flex h-full min-h-[220px] flex-col rounded-lg px-5 py-7 transition-colors duration-300 hover:bg-[#5941a926]"
                >
                  <div className="mb-4 text-4xl text-accent">
                    <Icon aria-hidden />
                  </div>
                  <div className="mb-6 flex-1">
                    <h3 className="mb-2 text-lg font-medium text-white">
                      {item.title}
                    </h3>
                    <p className="max-w-[350px] text-sm leading-relaxed text-white/70">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-3xl text-white/80">
                    <RxArrowTopRight
                      className="transition-transform duration-300 group-hover:rotate-45 group-hover:text-accent"
                      aria-hidden
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
