import css from "./slider-navigation-dots.styles.module.css";

const Info = ({ currentIndex }) => {
  return (
    <div style={{ color: "white", marginBottom: "1rem" }}>
      Review photo {currentIndex + 1}
    </div>
  );
};

const IndexInfo = ({ currentIndex, contentLength }) => {
  return (
    <div style={{ color: "grey" }}>
      {currentIndex + 1} of {contentLength}
    </div>
  );
};

const SliderNavigationDots = ({
  imgs,
  sliderNav,
  dots,
  swiperInstance,
  currentIndex,
}) => {
  const handleSlideTo = (i) => swiperInstance.slideTo(i);
  const contentLength = swiperInstance ? swiperInstance.slides.length : 0;

  return (
    <div className={sliderNav || css["slider-nav"]}>
      <Info currentIndex={currentIndex} />
      <IndexInfo currentIndex={currentIndex} contentLength={contentLength} />
      <div className={dots || css["dots"]}>
        {imgs.map((_, i) => (
          <div
            key={i}
            onClick={() => {
              handleSlideTo(i);
            }}
            data-active={JSON.stringify(i === currentIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderNavigationDots;
