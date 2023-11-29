import { createContext, useContext, useState } from "react";
import { ProductContext } from "./product.context";

export const ReviewImgContext = createContext();

const INITIAL_STATE = {
  open: false,
  selectedReview: 0,
  selectedReviewImg: 0,
};

const ReviewContextProvider = ({ children }) => {
  const [reviewCtx, setReviewCtx] = useState(INITIAL_STATE);
  const { item } = useContext(ProductContext);

  const reviewImgs = item.reviews[reviewCtx.selectedReview].review.imgs;

  return (
    <ReviewImgContext.Provider value={{ reviewCtx, setReviewCtx, reviewImgs }}>
      {children}
    </ReviewImgContext.Provider>
  );
};

export default ReviewContextProvider;
