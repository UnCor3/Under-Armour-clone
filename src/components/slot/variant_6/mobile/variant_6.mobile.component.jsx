import css from "./variant_6.mobile.styles.module.css";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";

const VARIANT_6_MOBILE = ({ content }) => {
  return (
    <div className={css["module-wrapper"]}>
      <Swiper slidesPerView={1}>
        {content.map((item, i) => (
          <SwiperSlide key={i}>
            <div className={css["shop-sport-wrapper"]}>
              <div className={css["sport-img"]}>
                <img alt="slot-img" src={item.img.mobile} />
              </div>
              <div className={css["module-bottom-promo-text"]}>
                <span>{item.promoText}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default VARIANT_6_MOBILE;
