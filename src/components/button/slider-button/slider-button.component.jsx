import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const Variant_1 = ({
  buttonClass,
  swiperInstance,
  reachedEnd,
  reachedStart,
}) => {
  const next = () => swiperInstance.slideNext();
  const prev = () => swiperInstance.slidePrev();
  return (
    <>
      <button
        className={buttonClass}
        data-position="left"
        disabled={reachedStart}
        onClick={prev}
      >
        <BiSolidLeftArrow />
      </button>
      <button
        className={buttonClass}
        data-position="right"
        disabled={reachedEnd}
        onClick={next}
      >
        <BiSolidRightArrow />
      </button>
    </>
  );
};

export const Variant_2 = ({
  buttonClass,
  swiperInstance,
  reachedEnd,
  reachedStart,
}) => {
  const next = () => swiperInstance.slideNext();
  const prev = () => swiperInstance.slidePrev();
  return (
    <>
      <button
        className={buttonClass}
        data-position="left"
        disabled={reachedStart}
        onClick={prev}
      >
        <MdKeyboardArrowLeft />
      </button>
      <button
        className={buttonClass}
        data-position="right"
        disabled={reachedEnd}
        onClick={next}
      >
        <MdKeyboardArrowRight />
      </button>
    </>
  );
};
