import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import NewTag, {
  Variant_2_Styles,
} from "../product-new-tag/product-new-tag.component";
import css from "./product-carousel.styles.module.css";
import { useEffect, useRef, useState } from "react";

export default function ProductCarousel({ imgs, isNew, video }) {
  return (
    <div className={`${css["carousel-container"]} sm-dt-hide`}>
      {isNew ? (
        <NewTag
          style={{
            ...Variant_2_Styles,
            zIndex: "1",
            fontSize: "0.8rem",
            fontWeight: "500",
          }}
        />
      ) : null}
      <Carousel video={video} imgs={imgs} />
      <div className={css["pagination"]}></div>
    </div>
  );
}

const Carousel = ({ imgs, video }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef();

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.load();
  }, [video]);

  const updateIndex = (swiperInstance) => {
    if (swiperInstance === null) return;
    const currentSlide = swiperInstance.activeIndex;
    setCurrentIndex(currentSlide);
  };

  return (
    <Swiper slidesPerView={1} onActiveIndexChange={updateIndex}>
      {video ? (
        <SwiperSlide>
          <div className={css["mb-video"]}>
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              poster={video && video.poster}
            >
              <source src={video && video.src} />
            </video>
          </div>
        </SwiperSlide>
      ) : null}
      {imgs.map((img, i) => (
        <SwiperSlide key={i}>
          <div>
            <img alt="video" src={img} />
          </div>
        </SwiperSlide>
      ))}
      <CarouselPagination
        imgs={imgs}
        video={video}
        currentIndex={currentIndex}
      />
    </Swiper>
  );
};

const CarouselPagination = ({ imgs, video, currentIndex }) => {
  const swiper = useSwiper();
  const handleOnClick = (i) => swiper.slideTo(i);

  const totalSlides = video ? imgs.length + 1 : imgs.length;

  return (
    <div className={css["pagination"]}>
      {Array.from({ length: totalSlides }, (_, i) => (
        <div
          className={css["page"]}
          style={{
            backgroundColor: currentIndex === i ? "grey" : "black",
          }}
          onClick={() => handleOnClick(i)}
          key={i}
        ></div>
      ))}
    </div>
  );
};
