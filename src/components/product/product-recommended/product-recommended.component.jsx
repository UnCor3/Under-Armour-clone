import { useRef, useState } from "react";
import css from "./product-recommended.styles.module.css";
import { Variant_2 as SliderButton } from "../../button/slider-button/slider-button.component";
import useNextImageOnHover from "../../../hooks/useNextImageOnHover.hook";
import { PRODUCT_RECOMMENDED_DATA as data } from "../../../data/data";
import { SwiperSlide, Swiper } from "swiper/react";
import Link from "next/link";

const Img = ({ img }) => {
  const imgRef = useRef();
  useNextImageOnHover(imgRef, img);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link href="/c/mens">
        <img
          className={css["product-image"]}
          ref={imgRef}
          alt={img.title}
          title={img.title}
          src={img.initialSrc}
        />
      </Link>
      <div className={css["info"]}>
        <div className={css["name"]}>{img.title}</div>
        <div className={css["price"]}>
          <span className={css["discount"]}>{img.price.withoutDiscount}</span>
          <span className={css["current"]}>{img.price.withDiscount}</span>
        </div>
        <div className={css["promo"]}>
          <span>{img.price.promoName}</span>
        </div>
      </div>
    </div>
  );
};

export default function RecommendedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [swiperInstance, setSwiperInstance] = useState();
  const handleSwiperInstance = (swiperInstance) =>
    setSwiperInstance(swiperInstance);
  const [reachedEnd, setReachedEnd] = useState(false);
  return (
    <div className={css["recommended-products-swiper-container"]}>
      <span className={css["title"]}>You Might Also Like</span>
      <Swiper
        slidesPerView={1.35}
        spaceBetween={35}
        onSwiper={handleSwiperInstance}
        onSliderMove={() => {
          setReachedEnd(false);
        }}
        onReachEnd={() => {
          setReachedEnd(true);
        }}
        onRealIndexChange={(s) => {
          setCurrentIndex(s.onRealIndexChange);
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <div className={css["product"]}>
                <Img img={img} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SliderButton
        buttonClass={`${css["nav"]} sm-dt-show`}
        swiperInstance={swiperInstance}
        currentIndex={currentIndex}
        reachedEnd={reachedEnd}
      />
    </div>
  );
}
