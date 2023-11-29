import { createContext, Component } from "react";

const SwiperContext = createContext(null);

const Swiper = (instance) => {
  const Slide = ({ children }) => (
    <SwiperContext.Provider value={instance}>
      <div className="swiper-slide">{children}</div>;
    </SwiperContext.Provider>
  );

  const Outer = ({ children }) => (
    <SwiperContext.Provider value={instance}>{children}</SwiperContext.Provider>
  );

  const Inner = ({ children }) => (
    <SwiperContext.Provider value={instance}>
      <div className="swiper-custom-container">
        <div className="swiper-container">
          <div className="swiper-wrapper">{children}</div>
        </div>
        {Outer}
      </div>
    </SwiperContext.Provider>
  );

  return { Slide, Outer, Inner };
};

export default Swiper;
