import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useMemo } from "react";

const PROJECT_ASSETS = [
  { path: "/thumb1.jpg", link: "https://www.ccp.com.mx/" },
  { path: "/vero-pagina.png", link: "https://my-landing.tadeosoto1993.workers.dev/" },
  { path: "/fsf-pagina.png", link: "https://segurodevidagnp-fsf.com/" },
  { path: "/caenna-pagina.png", link: "https://kodawave-application-site.vercel.app/" },
  { path: "/cpc-pagina.png", link: "https://website-cpc-5hf.pages.dev/" },
  { path: "/voltin-page.png", link: "https://voltind-page.vercel.app/" },
  { path: "/thumb2.jpg", link: "https://omnifood-tadeosoto.netlify.app/" },
  { path: "/pagina-paco.png", link: "https://pagina-paco.vercel.app/" },
];

function chunkPages(items, size) {
  const pages = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }
  return pages;
}

const THUMB_SIZES =
  "(max-width: 640px) 50vw, (max-width: 1024px) 34vw, (max-width: 1536px) 24vw, 420px";

const WorkSlider = () => {
  const { t: tc } = useTranslation("common");
  const { t: tp } = useTranslation("projects");

  const projectPages = useMemo(() => {
    const titles = tp("titles", { returnObjects: true });
    if (!Array.isArray(titles) || titles.length !== PROJECT_ASSETS.length) {
      return chunkPages(
        PROJECT_ASSETS.map((a, i) => ({
          ...a,
          title: `Project ${i + 1}`,
        })),
        4
      );
    }
    const merged = PROJECT_ASSETS.map((a, i) => ({
      ...a,
      title: titles[i],
    }));
    return chunkPages(merged, 4);
  }, [tp]);

  return (
    <Swiper
      className="work-slider-swiper w-full max-w-full overflow-hidden py-1"
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={0}
      autoHeight
      watchOverflow
      resistanceRatio={0}
      rewind={projectPages.length > 1}
      autoplay={
        projectPages.length > 1
          ? {
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }
          : false
      }
      pagination={{ clickable: true }}
    >
      {projectPages.map((images, pageIndex) => (
        <SwiperSlide
          key={`page-${pageIndex}`}
          className="!box-border !h-auto !w-full shrink-0"
        >
          <div className="grid w-full max-w-full grid-cols-2 grid-rows-2 gap-3 sm:gap-4">
            {images.map((image, imageIndex) => (
              <div
                className="relative aspect-[16/10] w-full min-w-0 overflow-hidden rounded-lg group"
                key={`${image.path}-${pageIndex}-${imageIndex}`}
              >
                <a
                  href={image.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-full w-full cursor-pointer"
                >
                  <span className="sr-only">
                    {tc("workSlider.openProject", { title: image.title })}
                  </span>
                  <Image
                    src={image.path}
                    alt={image.title}
                    fill
                    sizes={THUMB_SIZES}
                    quality={92}
                    className="object-cover object-top"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-[#2563eb] to-[#4a22bd] opacity-0 transition-opacity duration-700 group-hover:opacity-80" />
                  <div className="pointer-events-none absolute bottom-0 translate-y-full transition-transform duration-300 group-hover:-translate-y-10 group-hover:xl:-translate-y-20">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      <div className="delay-100">{tc("workSlider.see")}</div>
                      <div className="translate-y-[500%] transition-transform delay-150 group-hover:translate-y-0">
                        {tc("workSlider.project")}
                      </div>
                      <div className="translate-y-[500%] text-xl transition-transform delay-200 group-hover:translate-y-0">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
