import ProductImgModalPortal from "../../portals/product-img-modal-portal/product-img-modal.portal.component";
import { ProductContext } from "../../../context/product.context";
import { useRef, useEffect, useContext } from "react";
import css from "./product-img-modal.styles.module.css";
import SliderNavigationDots from "../../button/slider-navigation-dots/slider-navigation-dots.component";
import useImageSlider from "../../../hooks/useImageSlider.hook";

const ProductImgModal = ({ imgs, productImgPopUpHandler }) => {
  const { onOpen, delayStop, isClosed, combinedCSS, currentImg } =
    productImgPopUpHandler;

  const divRef = useRef();

  useEffect(() => {
    onOpen(divRef.current);
  }, []);

  const { handleDotClick, currentIndex, debouncedScrollHandler } =
    useImageSlider(imgs, divRef.current, "vertical", "2", currentImg);

  return (
    <>
      <div ref={divRef} onScroll={debouncedScrollHandler} style={combinedCSS}>
        <div className={css["imgs-container"]}>
          {imgs.map((img, i) => (
            <div key={i} className={css["img-wrapper"]}>
              <img alt="product-img" src={img}></img>
            </div>
          ))}
        </div>
      </div>
      <button
        className={css["product-review-close"]}
        data-active={JSON.stringify(isClosed)}
        onClick={() => delayStop()}
      >
        <div className={css["close-stick"]}></div>
        <div className={css["close-stick"]}></div>
      </button>
      <div className={css["slider-nav"]}>
        <div style={{ color: "grey" }}>
          {currentIndex + 1} of {imgs.length}
        </div>
      <div className={css["dots"]}>
        {imgs.map((_, i) => (
          <div
            key={i}
            onClick={() => {
              handleDotClick(i);
            }}
            data-active={JSON.stringify(i === currentIndex)}
          />
        ))}
      </div>
    </div>
    </>
  );
};

const ImgModal = ({ imgs }) => {
  const { productImgPopUpHandler } = useContext(ProductContext);
  return (
    <>
      {!productImgPopUpHandler.isClosed ? (
        <ProductImgModalPortal>
          <ProductImgModal
            imgs={imgs}
            productImgPopUpHandler={productImgPopUpHandler}
          />
        </ProductImgModalPortal>
      ) : null}
    </>
  );
};

export default ImgModal;
