import { createContext } from "react";
import usePopUpEffect from "../hooks/usePopUpEffect.hook";

export const ProductContext = createContext();

const ProductContextProvider = ({ children, products }) => {
  const productImgPopUpHandler = usePopUpEffect({
    style: {
      initialScale: 1,
      gap: "2",
    },
    bodyStyle: {
      notScrollable: true,
      className: "not-scrollable",
    },
    scroll: {
      type: "vertical",
    },
    extraCss: {
      stable: {
        overflowY: "scroll",
        overflowX: "hidden",
        margin: "0 auto",
        position: "fixed",
        zIndex: "100",
        backgroundColor: "#f0f0f0",
        transition: "all 300ms ease",
      },
    },
  });

  const reviewImgPopUpHandler = usePopUpEffect({
    style: {
      initialHeight: 100,
      initialWidth: 100,
      initialScale: 0.6,
      initialTop: 0,
      initialLeft: 0,
      gap: "5",
    },
    bodyStyle: {
      notScrollable: true,
      className: "not-scrollable",
    },
    scroll: {
      type: "horizontal",
    },
    extraCss: {
      stable: {
        overflow: "hidden",
        margin: "0 auto",
        position: "fixed",
        zIndex: "100",
        transition: "all 300ms ease",
        background: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
  });
  const parsedProducts = JSON.parse(products || "[]");
  function calculateStarRatingPercentages(reviews) {
    if (!reviews.length) return;
    const starCounts = [0, 0, 0, 0, 0];
    let totalAvg = 0;

    reviews.forEach((review) => {
      starCounts[review.review.starRating - 1]++;
      totalAvg += review.review.starRating;
    });

    totalAvg = parseFloat((totalAvg / reviews.length).toFixed(1));

    const totalReviews = reviews.length;
    const avgStarRatings = starCounts.map((count) =>
      ((count / totalReviews) * 100).toFixed(0)
    );

    return {
      starCounts,
      avgStarRatings,
      totalAvg,
    };
  }

  const productStarRatingInfo = calculateStarRatingPercentages(
    parsedProducts.item.reviews
  );

  const providerValue = {
    productImgPopUpHandler,
    reviewImgPopUpHandler,
    ...parsedProducts,
    productStarRatingInfo,
  };

  return (
    <ProductContext.Provider value={providerValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
