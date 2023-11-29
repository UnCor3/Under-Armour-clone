import withExtendable from "../../../hocs/withExtendable.hoc.component";
import { QtyOption } from "../../legend/qty-legend/qty-legend.component";
import { ProductContext } from "../../../context/product.context";
import css from "./product-specs.styles.module.css";
import { forwardRef, useContext, useEffect, useRef } from "react";
import NewTag from "../product-new-tag/product-new-tag.component";
import { AiOutlinePicture } from "react-icons/ai";
import {
  Arrow,
  Compression,
  Fitted,
  Loose,
  Pickup,
  Ship,
} from "../../svgs/svgs.component";
import dynamic from "next/dynamic";
const StarRatings = dynamic(() => import("react-star-ratings"), {
  ssr: false,
});

export const Sizes = ({ sizes, selectedSize, setSelectedSize }) => {
  return (
    <div className={css["sizes"]}>
      {sizes.map((size) => (
        <div
          key={size.name}
          className={css["size"]}
          data-active={JSON.stringify(size.name === selectedSize)}
          data-instock={JSON.stringify(size.available)}
          onClick={() => {
            if (!size.available) return;
            setSelectedSize(size.name);
          }}
        >
          {size.name}
        </div>
      ))}
    </div>
  );
};

export const Price = ({ price, addiClassName }) => {
  const {
    item: { reviews },
    productStarRatingInfo: { totalAvg },
  } = useContext(ProductContext);

  return (
    <>
      <div
        className={
          addiClassName ? `${css["price"]} ${addiClassName}` : css["price"]
        }
      >
        <div>
          <span>{price}</span>
        </div>
        <div style={{ fontSize: "0.9rem", cursor: "pointer" }}>
          <a
            style={{ cursor: "pointer" }}
            onClick={() => {
              document
                .getElementById("reviews")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <StarRatings
              rating={totalAvg}
              starRatedColor="black"
              numberOfStars={5}
              name="rating"
              starDimension="17px"
              starSpacing="0px"
            />
          </a>
          <a
            className={css["rating"]}
            onClick={() => {
              document
                .getElementById("reviews")
                .scrollIntoView({ behavior: "smooth" });
            }}
            style={{ cursor: "pointer" }}
          >
            {`(${reviews.length})`}
          </a>
        </div>
      </div>
    </>
  );
};

export const Offer = ({ klarna, addiClassName }) => {
  return (
    <>
      <div
        className={
          addiClassName ? `${css["offer"]} ${addiClassName}` : css["offer"]
        }
      >
        <span>
          {klarna}
          <span className={css["klarna"]}>Klarna.</span>
        </span>
        <span className={css["learn-more"]}>Learn more</span>
      </div>
    </>
  );
};

export const FitGuide = ({ fit }) => {
  if (fit == 0) return;

  return (
    <div className={css["fit-guide-container"]}>
      {fit == 1 ? <Loose /> : fit == 2 ? <Fitted /> : <Compression />}
      <div className={css["fit-guide"]}>
        <div data-active={JSON.stringify(fit == 1)}>
          <span>Loose</span>
          {fit == 1 ? <span>Fuller Cut</span> : null}
        </div>
        <div data-active={JSON.stringify(fit == 2)}>
          <span>Fitted</span>
          {fit == 2 ? <span>Streamlined Fit</span> : null}
        </div>
        <div data-active={JSON.stringify(fit == 3)}>
          <span>Compression</span>
          {fit == 3 ? <span>Ultra-tight Fit</span> : null}
        </div>
      </div>
    </div>
  );
};

let selectedByClickingColor;

const ColorPalate = ({ color, selectedColor, setSelectedColor, i }) => {
  const initialRender = useRef(true);
  if (initialRender.current) {
    selectedByClickingColor = selectedColor;
    initialRender.current = false;
  }

  function onHover(i) {
    window.innerWidth > 768 && selectedColor != i && setSelectedColor(i);
  }

  function onHoverEnd() {
    window.innerWidth > 768 && setSelectedColor(selectedByClickingColor);
  }

  return (
    <div
      key={i}
      className={css["color-container"]}
      data-active={selectedColor == i || selectedByClickingColor == i}
      onClick={() => {
        selectedByClickingColor = i;
        setSelectedColor(i);
      }}
      onMouseOver={() => onHover(i)}
      onMouseLeave={() => onHoverEnd()}
    >
      <div className={css["color-palate"]}>
        {color.colorCodes.map((color, _i) => (
          <div
            key={_i}
            className={css["color"]}
            style={{
              backgroundColor: `#${color}`,
              width: 10,
              height: "1.25rem",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export const ColorOptions = ({
  colorOptions,
  selectedColor,
  setSelectedColor,
}) => {
  return (
    <>
      <div>{colorOptions[selectedColor].name}</div>
      <div
        style={{
          display: "flex",
          padding: "2rem 1rem 1rem 1rem",
          columnGap: "0.4rem",
        }}
      >
        {colorOptions.map((color, i) => (
          <ColorPalate
            color={color}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            i={i}
            key={i}
          />
        ))}
      </div>
    </>
  );
};

export const Shipment = ({ selectedShipmentType, setSelectedShipmentType }) => {
  return (
    <div className={css["shipment"]}>
      <div
        className={css["ship"]}
        data-active={JSON.stringify(selectedShipmentType === "ship")}
        onClick={() => {
          setSelectedShipmentType("ship");
        }}
      >
        <div>
          <Ship />
        </div>
        <div>Ship</div>
        <div>In Stock Online</div>
      </div>
      <div
        className={css["pickup"]}
        data-active={JSON.stringify(selectedShipmentType === "pickup")}
        onClick={() => {
          setSelectedShipmentType("pickup");
        }}
      >
        <div>
          <Pickup />
        </div>
        <div>Pickup</div>
        <div>Select A Store</div>
      </div>
    </div>
  );
};

export const ProductQty = withExtendable(
  forwardRef(function ProductQty(
    { selectedQty, setSelectedQty, extendHandler },
    ref
  ) {
    const { isExtended, setIsExtended } = extendHandler;
    return (
      <div
        className={css["product-qty"]}
        onClick={() => setIsExtended((prev) => !prev)}
        data-active={JSON.stringify(isExtended)}
      >
        <span className={css["product-qty-top"]}>Qty</span>
        <span>{selectedQty}</span>
        <div className={css["arrow"]} data-active={JSON.stringify(isExtended)}>
          <Arrow />
        </div>
        <ul
          className={css["product-qty-data"]}
          data-active={JSON.stringify(isExtended)}
          ref={ref}
        >
          <QtyOption
            selectedQty={selectedQty}
            setSelectedQty={setSelectedQty}
          />
        </ul>
      </div>
    );
  }),
  { max: 209 }
);

export const WhatDoesItDo = ({ explanation }) => {
  return (
    <div className={css["explanation-container"]}>
      <span>What's it do?</span>
      <span>{explanation}</span>
    </div>
  );
};

export const AthInfo = ({ athInfo }) => (
  <div className={`${css["ath-info"]} sm-dt-hide`}>
    <span>{athInfo}</span>
  </div>
);

export const ProductPrimaryImage = ({
  img,
  openProductImg,
  isNew,
  athInfo,
  imgCount,
  video,
}) => {
  const videoRef = useRef();

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.load();
  }, [video]);

  return (
    <div className={css["product-primary-img"]}>
      <div className={css["sticky-img"]}>
        {video ? (
          <video
            playsInline
            autoPlay
            muted
            loop
            ref={videoRef}
            onClick={() => {
              openProductImg(0);
            }}
          >
            <source src={video.src} />
          </video>
        ) : (
          <img
            alt="product-primary-img"
            src={img}
            onClick={() => {
              openProductImg(0);
            }}
          />
        )}
        {isNew ? (
          <NewTag
            style={{
              top: "1.5rem",
              left: "2rem",
              fontSize: "0.7rem",
              fontWeight: "600",
            }}
          />
        ) : null}
        <div style={{ position: "relative" }}>
          <ProductImgCount
            imgCount={imgCount}
            style={{
              bottom: "0%",
              fontSize: "0.8rem",
              cursor: "pointer",
            }}
            onClick={() => {
              openProductImg(0);
            }}
          />
        </div>
        <div className={css["ath"]}>{athInfo}</div>
      </div>
    </div>
  );
};

export const DesktopImgs = ({ imgs, openProductImg }) => {
  return (
    <div className={`${css["desktop-imgs"]} sm-dt-show`}>
      {imgs.map((img, i) => {
        if (i >= 5 || i === 0) return;
        return (
          <div
            onClick={(e) =>
              openProductImg(e.currentTarget.getAttribute("img-id"))
            }
            key={i}
            img-id={i + 1}
          >
            <img src={img} alt="ua" />
          </div>
        );
      })}
    </div>
  );
};

export const ProductImgCount = ({ imgCount, onClick, ...rest }) => {
  return (
    <div className={css["view-img-count"]} {...rest} onClick={onClick}>
      <AiOutlinePicture
        style={{
          fontSize: "1.2rem",
          marginRight: "0.4rem",
        }}
      />
      <span>View Photos ({imgCount})</span>
    </div>
  );
};
