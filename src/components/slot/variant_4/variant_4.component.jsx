import NewTag from "../../product/product-new-tag/product-new-tag.component";
import css from "./variant_4.styles.module.css";
import { useRef, useState } from "react";
import { Variant_2 as SliderButton } from "../../button/slider-button/slider-button.component";
import useNextImageOnHover from "../../../hooks/useNextImageOnHover.hook";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const ImgWithHoverEffect = ({ item }) => {
  const imgRef = useRef();
  useNextImageOnHover(imgRef, {
    lastSrc: item.lastImg,
    initialSrc: item.img,
  });

  return (
    <Link href={item.href}>
      <img
        ref={imgRef}
        className={css["product-img"]}
        src={item.img}
        alt={item.imgAlt}
      />
    </Link>
  );
};

const VARIANT_4 = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [swiperInstance, setSwiperInstance] = useState();
  const handleSwiperInstance = (swiperInstance) =>
    setSwiperInstance(swiperInstance);

  const [reachedEnd, setReachedEnd] = useState(false);
  const [reachedStart, setReachedStart] = useState(true);

  return (
    <div className={css["container"]}>
      <div className={css["primary-wrapper"]}>
        <div className={css["products-wrapper"]}>
          <div className={css["products-container"]}>
            <Swiper
              navigation={false}
              slidesPerView={1.4}
              spaceBetween={8}
              onProgress={(_, p) => {
                if (p === 1) {
                  setReachedEnd(true);
                  setReachedStart(false);
                } else if (p === 0) {
                  setReachedEnd(false);
                  setReachedStart(true);
                } else {
                  setReachedEnd(false);
                  setReachedStart(false);
                }
              }}
              onSwiper={handleSwiperInstance}
              breakpoints={{
                768: {
                  slidesPerView: 2.75,
                },
              }}
            >
              {content.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className={css["product-card"]}>
                    <NewTag
                      style={{
                        top: "1rem",
                        left: "2rem",
                        fontSize: "0.7rem",
                        fontWeight: "600",
                      }}
                    />
                    <ImgWithHoverEffect item={item} />
                    <div className={css["item-props"]}>
                      <div>
                        <a href="#">{item.colorCount}</a>
                      </div>
                      <div>
                        <a href="#">{item.itemName}</a>
                      </div>
                      <div>{item.price}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <SliderButton
              buttonClass={css["nav"]}
              currentIndex={currentIndex}
              swiperInstance={swiperInstance}
              // slidePosition={slidePosition}
              reachedEnd={reachedEnd}
              reachedStart={reachedStart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VARIANT_4;
