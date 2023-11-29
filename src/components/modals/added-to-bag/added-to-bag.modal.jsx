import ConfirmActionPortal from "../../portals/confirm-action-portal/confirm.action.portal.component";
import ProductRecommended from "../../product/product-recommended/product-recommended.component";
import BackShadow from "../../back-shadow/back-shadow.component";
import css from "./added-to-bag.styles.module.css";
import {
  Variant1,
  Variant2,
} from "../../button/action-button/action-button.component";
import { greaterThanOne } from "../../../helper/helper";
import Divider from "../../divider/divider.component";
import Link from "next/link";

const GreenCheck = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={css["green-check"]}
      viewBox="0 0 17 16"
    >
      <g transform="translate(.5)" fillRule="nonzero" fill="none">
        <circle fill="#00834B" cx="8" cy="8" r="8" />
        <g stroke="#FFF" strokeLinecap="round" strokeLinejoin="round">
          <path d="m5.53 8.143 1.764 1.765M7.294 9.908l3.921-3.92" />
        </g>
      </g>
    </svg>
  );
};

const AddedToBagModal = ({ item, closeModal }) => {
  return (
    <>
      <ConfirmActionPortal>
        <BackShadow
          displayOnMobile={true}
          doesHaveTrigger={false}
          closeOnBackgroundHover={false}
          closeOnClick={true}
          closeOnClickCallback={() => closeModal()}
          className={css["back-shadow"]}
          initRender={true}
        >
          <div className={css["modal-wrapper"]}>
            <div className={css["modal-container"]}>
              <div className={css["added-to-bag-info"]}>
                <div
                  style={{
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <GreenCheck /> ({item.item.qty}){" "}
                  {greaterThanOne(item.item.qty) ? "Items" : "Item"} Added To
                  Bag
                </div>
              </div>
              <Divider marginTop="1rem" />
              <div className={css["items"]}>
                <div className={css["added-product"]}>
                  <div className={css["img-container"]}>
                    <img alt="item" src={item.item.img} />
                  </div>
                  <div className={css["product-info"]}>
                    <div style={{ fontWeight: "500", fontSize: "0.9rem" }}>
                      {item.item.title}
                    </div>
                    <div style={{ fontSize: "0.9rem" }}>{item.item.size}</div>
                  </div>
                </div>
                <ProductRecommended
                  containerClass={css["container-class"]}
                  divWidth={css["div-width"]}
                  titleClass={css["title"]}
                />
              </div>
              <div className={css["action-buttons"]}>
                <Variant1
                  buttonText={"Continue Shopping"}
                  style={{ width: "100%" }}
                  onClick={closeModal}
                />
                <Variant2 style={{ width: "100%" }}>
                  <Link href={"/cart"}>View Bag & Checkout</Link>
                </Variant2>
              </div>
            </div>
          </div>
        </BackShadow>
      </ConfirmActionPortal>
    </>
  );
};

export default AddedToBagModal;
