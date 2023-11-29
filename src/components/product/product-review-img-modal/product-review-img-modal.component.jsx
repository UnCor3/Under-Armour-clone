import SliderNavigationDots from "../../button/slider-navigation-dots/slider-navigation-dots.component";
import PopupCloseButton from "../../button/popup-close-button/popup-close-button.component";
import { Variant_1 as SliderButton } from "../../button/slider-button/slider-button.component";
import { useContext, useState } from "react";
import css from "./product-review-img-modal.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReviewImgContext } from "@/context/review-img.context";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const ProductReviewImgModal = () => {
  const { reviewCtx, setReviewCtx } = useContext(ReviewImgContext);
  const handleClose = () => {
    setReviewCtx({ ...reviewCtx, open: false });
  };

  return (
    <>
      {reviewCtx.open ? (
        <div className={css["modal-container"]} onClick={handleClose}>
          <ProductReviewImgModalComp />
        </div>
      ) : null}
    </>
  );
};

//Swiper comes with overflow of hidden
//to handle swiping outside of the Swiper
//assigning the swiper instance to useState
//overriding css doesn't work
//because swiper does not render anything in between
//container and wrapper
const ProductReviewImgModalComp = () => {
  const { reviewImgs, reviewCtx, setReviewCtx } = useContext(ReviewImgContext);
  const handleClose = () => {
    setReviewCtx({ ...reviewCtx, open: false });
  };

  const [swiperInstance, setSwiperInstance] = useState();
  const handleSwiperInstance = (swiperInstance) => {
    setSwiperInstance(swiperInstance);
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateIndex = (swiperInstance) => {
    if (swiperInstance === null) return;
    const currentSlide = swiperInstance.activeIndex;
    setCurrentIndex(currentSlide);
  };

  const next = () => swiperInstance.slideNext();
  const prev = () => swiperInstance.slidePrev();

  const contentLength = swiperInstance ? swiperInstance.slides.length - 1 : 0;

  return (
    <div
      className={css["rev-imgs-container"]}
      onClick={(e) => e.stopPropagation()}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        onSwiper={handleSwiperInstance}
        onActiveIndexChange={updateIndex}
        breakpoints={{
          500: {
            spaceBetween: 50,
          },
        }}
      >
        {reviewImgs.map((img, i) => (
          <SwiperSlide key={i}>
            <div className={css["img-container"]}>
              <img alt="review-img" src={img} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={css["page-button"]}
        data-position="left"
        disabled={currentIndex === 0}
        onClick={prev}
      >
        <BiSolidLeftArrow />
      </button>
      <button
        className={css["page-button"]}
        data-position="right"
        disabled={currentIndex === contentLength}
        onClick={next}
      >
        <BiSolidRightArrow />
      </button>

      <SliderNavigationDots
        imgs={reviewImgs}
        currentIndex={currentIndex}
        swiperInstance={swiperInstance}
      />
      <PopupCloseButton onClick={handleClose} />
    </div>
  );
};

export default ProductReviewImgModal;
