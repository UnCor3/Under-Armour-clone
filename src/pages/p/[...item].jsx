import Type_1ProductTeaserComponent from "@/components/product/product-teaser/type_1/type_1-product-teaser.component";
import Type_2ProductTeaserComponent from "@/components/product/product-teaser/type_2/type_2-product-teaser.component";
import React, { useEffect, useState } from "react";
import css from "./ua-product.styles.module.css";
import ProductImgModal from "@/components/product/product-img-modal/product-img-modal.component";
import { useContext } from "react";
import { ProductContext } from "@/context/product.context";
import Divider from "@/components/divider/divider.component";
import ProductHeader from "@/components/product/product-header/product-header.component";
import {
  ColorOptions,
  FitGuide,
  Offer,
  Price,
  Sizes,
  Shipment,
  ProductQty,
  WhatDoesItDo,
  AthInfo,
  DesktopImgs,
  ProductPrimaryImage,
} from "@/components/product/product-specs/product-specs.component";
import ProductCarousel from "@/components/product/product-carousel/product-carousel.component";
import ProductAddToBag from "@/components/product/product-add-to-bag/product-add-to-bag.component";
import ProductCharacteristics from "@/components/product/product-characteristics/product-characteristics.component";
import {
  DNA,
  FitAndCare,
  Specs,
} from "@/components/product/product-extendable-text/product-extendable-text.component";
import {
  RateUs,
  FreeReturnsAndExchange,
} from "@/components/product/product-mics/product-mics.component";
import ProductReviewsSection from "@/components/product/product-reviews-section/product-reviews-section.component";
import ProductReviewImgModal from "@/components/product/product-review-img-modal/product-review-img-modal.component";
import ProductRecommended from "@/components/product/product-recommended/product-recommended.component";
import { BagContext } from "@/context/bag.context";
import { useRouter } from "next/router";
import { findProduct } from "@/lib/server-helpers";
import { getEssentialServerSideProps } from "@/context/essential.context";
import ProductContextProvider from "@/context/product.context";
import ReviewContextProvider from "@/context/review-img.context";
import Head from "next/head";

//need to render context especially here
//because don't need context anywhere else
const Product = ({ products }) => {
  return (
    <ProductContextProvider products={products}>
      <ReviewContextProvider>
        <ProductComp />
      </ReviewContextProvider>
    </ProductContextProvider>
  );
};

const ProductComp = () => {
  const { query: params } = useRouter();
  const { productImgPopUpHandler, category, subcategory, item } =
    useContext(ProductContext);

  const { dispatch } = useContext(BagContext);

  const {
    colorOptions,
    fullName,
    athInfo,
    explanation,
    dna,
    specs,
    fitAndCare,
    teaser,
    reviews,
    qAndA,
    id,
    isNew,
  } = item;

  const { openImg: openProductImg } = productImgPopUpHandler;

  const queryColor = params.c;
  const [addToBagItem, setAddToBagItem] = useState({
    item: {
      id: params.id || id,
      title: fullName,
      color: getColor(colorOptions, queryColor),
      get size() {
        for (const size of colorOptions[this.color].colorProps.sizes) {
          if (size.available) return size.name;
        }
      },
      qty: 1,
      get img() {
        return colorOptions[this.color].colorProps.imgs[0];
      },
      category: category,
      subcategory: subcategory,
      get colorName() {
        return colorOptions[this.color].name;
      },
      get price() {
        return colorOptions[this.color].colorProps.price;
      },
      get sku() {
        return colorOptions[this.color].sku;
      },
    },
    shipment: "ship",
  });

  //if router updates color query then replace color
  useEffect(() => {
    addToBagItem.item.color = getColor(colorOptions, queryColor);
  }, [queryColor]);

  const {
    setSelectedColor,
    setSelectedQty,
    setSelectedShipmentType,
    setSelectedSize,
  } = new addToBagItemHandler(setAddToBagItem, item);

  const addToBag = () =>
    dispatch({ type: "ADD_TO_BAG", payload: addToBagItem });

  const {
    item: { color: selectedColor, size: selectedSize, qty: selectedQty },
    shipment: selectedShipmentType,
  } = addToBagItem;

  const currentItem = colorOptions[selectedColor].colorProps;
  return (
    <>
      <Head>
        <title>{item.fullName}</title>
        <meta name="description" content={item.explanation} />
        <meta property="og:title" content={item.fullName} />
        <meta property="og:description" content={item.explanation} />
        <meta property="og:image" content={currentItem.imgs[0]} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`/product/${item.id}`} />
        <meta name="twitter:title" content={item.fullName} />
        <meta name="twitter:description" content={item.explanation} />
        <meta name="twitter:image" content={currentItem.imgs[0]} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`/product/${item.id}`} />
      </Head>
      <div className={css["product-container"]}>
        <div className={css["top"]}>
          <ProductPrimaryImage
            img={currentItem.imgs[0]}
            openProductImg={openProductImg}
            isNew={isNew}
            athInfo={athInfo}
            imgCount={currentItem.imgs.length}
            video={colorOptions[selectedColor].video}
          />
          <div>
            <ProductHeader
              category={category}
              subcategory={subcategory}
              fullName={fullName}
              price={currentItem.price}
              klarna={currentItem.klarna}
            />
            <ProductCarousel
              imgs={currentItem.imgs}
              isNew={isNew}
              video={colorOptions[selectedColor].video}
            />
            <AthInfo athInfo={athInfo} />

            <div className={css["product-specs"]}>
              <Divider marginBottom="1rem" />
              <ColorOptions
                colorOptions={colorOptions}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                category={category}
                subCategory={subcategory}
                id={id}
              />
              <Divider className={"sm-dt-hide"} marginBottom="1rem" />
              <Price price={currentItem.price} addiClassName={"sm-dt-hide"} />
              <Offer klarna={currentItem.klarna} addiClassName={"sm-dt-hide"} />
              <Divider className={"sm-dt-hide"} marginBottom="1rem" />
              <Sizes
                sizes={currentItem.sizes}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
              <FitGuide fit={currentItem.fit} />
              <Divider marginBottom="1rem" />
              <Shipment
                selectedShipmentType={selectedShipmentType}
                setSelectedShipmentType={setSelectedShipmentType}
              />
              <Divider />
              <div className={css["user-action"]}>
                <ProductQty
                  selectedQty={selectedQty}
                  setSelectedQty={setSelectedQty}
                />
                <ProductAddToBag
                  addToBag={addToBag}
                  addToBagItem={addToBagItem}
                  fullName={fullName}
                  price={currentItem.price}
                />
              </div>
              <Divider marginBottom="0" />
              <FreeReturnsAndExchange />
              <Divider />
              <WhatDoesItDo explanation={explanation} />

              <ProductCharacteristics item={item} />

              <Divider className="sm-dt-hide" marginBottom="1rem" />
              <DNA iterableText={dna} className="sm-dt-hide" />
              <Divider className="sm-dt-hide" marginBottom="1rem" />
              <Specs iterableText={specs} className="sm-dt-hide" />
              <Divider className="sm-dt-hide" marginBottom="1rem" />
              <FitAndCare iterableText={fitAndCare} className="sm-dt-hide" />
              <Divider className="sm-dt-hide" marginBottom="1rem" />
              <RateUs />
            </div>
            {teaser ? (
              <div className={`${css["teaser-wrapper"]} sm-dt-hide`}>
                <Type_1ProductTeaserComponent teaser={teaser.type_1[0]} />
                <Type_2ProductTeaserComponent
                  teaser={teaser.type_2[0]}
                  reversed={true}
                />
                <div
                  className={`${css["video-wrapper"]} sm-dt-hide`}
                  style={{ marginBottom: "1rem" }}
                >
                  <video
                    preload="auto"
                    autoPlay
                    playsInline
                    loop
                    muted
                    src={`videos/${id}/mb-teaser-video.mp4`}
                  ></video>
                </div>
                <div></div>
                <Type_2ProductTeaserComponent teaser={teaser.type_2[1]} />
                <Type_2ProductTeaserComponent
                  teaser={teaser.type_2[2]}
                  reversed={true}
                />
              </div>
            ) : null}
          </div>
        </div>
        <DesktopImgs imgs={currentItem.imgs} openProductImg={openProductImg} />
        {teaser ? (
          <div className={`${css["teaser-wrapper"]} sm-dt-show`}>
            <Type_1ProductTeaserComponent teaser={teaser.type_1[0]} />
            <Type_2ProductTeaserComponent
              teaser={teaser.type_2[0]}
              reversed={true}
            />
            <div className={css["video-wrapper"]}>
              <video
                preload="auto"
                autoPlay
                playsInline
                loop
                muted
                poster={`imgs/${id}/poster.webp`}
                src={`videos/${id}/dt-teaser-video.mp4`}
              ></video>
            </div>
            <Type_2ProductTeaserComponent teaser={teaser.type_2[1]} />
            <Type_2ProductTeaserComponent
              teaser={teaser.type_2[2]}
              reversed={true}
            />
            <Divider marginBottom={0} />
          </div>
        ) : null}

        <ProductRecommended />
        <ProductReviewsSection reviews={reviews} qAndA={qAndA} />

        <Divider marginBottom={0} />

        <ProductImgModal imgs={currentItem.detailedReviewImgs} />
        <ProductReviewImgModal />
      </div>
    </>
  );
};

const getColor = (colorOptions, queryColor) =>
  Object.keys(colorOptions).find((c) => {
    return c === queryColor;
  }) || 0;

//a shortcut for setting states
class addToBagItemHandler {
  constructor(setState, item) {
    this.setSelectedColor = function (payload) {
      setState((prev) => ({
        ...prev,
        item: {
          ...prev.item,
          color: payload,
          colorName: item.colorOptions[payload].name,
          img: item.colorOptions[payload].colorProps.imgs[0],
          sku: item.colorOptions[payload].sku,
        },
      }));
    };
    this.setSelectedSize = function (payload) {
      setState((prev) => ({ ...prev, item: { ...prev.item, size: payload } }));
    };
    this.setSelectedQty = function (payload) {
      setState((prev) => ({ ...prev, item: { ...prev.item, qty: payload } }));
    };
    this.setSelectedShipmentType = function (payload) {
      setState((prev) => ({ ...prev, shipment: payload }));
    };
  }
}

//get the product on server side
export const getServerSideProps = (ctx) => {
  const [category, subcategory, id] = ctx.params.item;

  const PRODUCT = findProduct(id, category, subcategory);

  if (!PRODUCT)
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
      props: {},
    };

  return {
    props: {
      products: JSON.stringify({
        item: PRODUCT,
        category,
        subcategory,
      }),
      ...getEssentialServerSideProps(ctx),
    },
  };
};

export default Product;
