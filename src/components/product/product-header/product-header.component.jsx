import { useState } from "react";
import { Offer, Price } from "../product-specs/product-specs.component";
import css from "./product-header.styles.module.css";
import { AiTwotoneHeart } from "react-icons/ai";

const ProductHeader = ({ category, subcategory, fullName, price, klarna }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className={css["product-header-container"]}>
      <div className={css["breadcrumbs"]}>
        <ul>
          <li>
            <a href={category}>{category}</a>
          </li>
          <li>
            <a href={subcategory}>{subcategory}</a>
          </li>
        </ul>
      </div>
      <div className={css["product-name"]}>
        <div className={css["top-part"]}>
          <h1>{fullName}</h1>
          <div
            className={css["heart-icon"]}
            data-active={JSON.stringify(isLiked)}
            onClick={() => setIsLiked((prev) => !prev)}
          >
            <AiTwotoneHeart />
          </div>
        </div>
        <div className={css["mid-part"]}>
          <Price price={price} addiClassName={"sm-dt-show"} />
        </div>
        <div className={css["bottom-part"]}>
          <Offer klarna={klarna} addiClassName={"sm-dt-show"} />
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
