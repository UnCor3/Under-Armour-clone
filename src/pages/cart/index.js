import ProductRecommended from "@/components/product/product-recommended/product-recommended.component";
import ConfirmActionModal from "@/components/modals/confirm-action/confirm-action.modal";
import {
  Variant1,
  Variant2,
} from "@/components/button/action-button/action-button.component";
import ProductQty from "@/components/legend/qty-legend/qty-legend.component";
import Divider from "@/components/divider/divider.component";
import { MdOutlineLocalShipping } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import css from "./ua-cart.styles.module.css";
import { GoArrowSwitch } from "react-icons/go";
import { BiPackage } from "react-icons/bi";
import { useState } from "react";
import { stringifyPrice } from "@/helper/helper";
import { useBagCtx } from "@/context/bag.context";
import { getEssentialServerSideProps } from "@/context/essential.context";
import Link from "next/link";

const Cart = () => {
  const {
    bagContext: { bag, totalItems, subTotal },
    setCustomQty,
    removeItemFromBag,
  } = useBagCtx();
  const isShipmentFree = subTotal >= 100;
  const remainingToFreeShipmentInPercentage = (subTotal / 100) * 100 + "%";

  return (
    <div className={css["cart-container"]}>
      <BagContent
        setCustomQty={setCustomQty}
        bag={bag}
        totalItems={totalItems}
        removeItemFromBag={removeItemFromBag}
      />
      <OrderSummary
        subTotal={subTotal}
        totalItems={totalItems}
        isShipmentFree={isShipmentFree}
        remainingToFreeShipmentInPercentage={
          remainingToFreeShipmentInPercentage
        }
      />
    </div>
  );
};

const PickupSVG = () => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="graphics-symbol"
    aria-hidden="true"
    name="Select A Pick Up Store"
    width="16"
    height="16"
    color="currentColor"
  >
    <path d="M1 39V23H9V39H1Z" stroke="currentColor" strokeWidth="2"></path>
    <path d="M39 39V23H47V39H39Z" stroke="currentColor" strokeWidth="2"></path>
    <rect
      x="9"
      y="15"
      width="30"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
    ></rect>
    <mask id="path-4-inside-1_0_12731" fill="white">
      <rect x="5" y="8" width="38" height="8" rx="0.5"></rect>
    </mask>
    <rect
      x="5"
      y="8"
      width="38"
      height="8"
      rx="0.5"
      stroke="currentColor"
      strokeWidth="4"
      mask="url(#path-4-inside-1_0_12731)"
    ></rect>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.9287 24.0594C31.8653 25.3878 30.7248 26.5924 28.9822 27.3927C30.7327 28.1848 31.8733 29.3894 31.9208 30.7261C31.9208 30.7261 31.4614 31.0974 29.9723 31.6667C28.6653 32.17 27.6673 32.2855 27.6673 32.2855L27.6752 29.3152C27.6752 28.8779 27.5089 28.4241 27.1842 28.0198C26.202 28.2673 25.1089 28.4076 23.9604 28.4076C22.8119 28.4076 21.7267 28.2673 20.7366 28.0198C20.4198 28.4158 20.2455 28.8696 20.2455 29.3152L20.2535 32.2855C20.2535 32.2855 19.2554 32.17 17.9485 31.6667C16.4594 31.0974 16 30.7261 16 30.7261C16.0634 29.3894 17.204 28.1931 18.9465 27.3927C17.204 26.5924 16.0634 25.3878 16 24.0594C16 24.0594 16.4594 23.6881 17.9644 23.1188C19.2713 22.6155 20.2693 22.5 20.2693 22.5L20.2614 25.4703C20.2614 25.9076 20.4277 26.3614 20.7525 26.7657C21.7347 26.5182 22.8277 26.3779 23.9762 26.3779C25.1248 26.3779 26.2099 26.5182 27.2 26.7657C27.5168 26.3696 27.6911 25.9158 27.6911 25.4703L27.6832 22.5C27.6832 22.5 28.6812 22.6155 29.9802 23.1188C31.4693 23.6881 31.9287 24.0594 31.9287 24.0594ZM23.9366 28.0611H23.9683H24C25.0376 28.0611 25.8772 27.797 26.495 27.3927C25.8772 26.9884 25.0376 26.7244 24 26.7244H23.9683H23.9366C22.899 26.7244 22.0594 26.9884 21.4416 27.3927C22.0594 27.797 22.899 28.0611 23.9366 28.0611Z"
      fill="currentColor"
    ></path>
  </svg>
);

const Items = ({ setCustomQty, bag, removeItemFromBag }) => {
  const [confirmActionRenderDetails, setConfirmActionRenderDetails] = useState({
    actionItem: undefined,
    render: false,
  });

  const actionMsg = "Are you sure you want to remove this item?";

  const rejectAction = () => {
    setConfirmActionRenderDetails({
      actionItem: undefined,
      render: false,
    });
  };

  const confirmAction = () => {
    removeItemFromBag(confirmActionRenderDetails.actionItem);
    setConfirmActionRenderDetails({
      actionItem: undefined,
      render: false,
    });
  };

  return (
    <>
      {bag.map((item, i) => {
        const _setCustomQty = (qty) =>
          setCustomQty({
            ...item,
            qty,
          });
        return (
          <div key={i}>
            <div className={css["item"]}>
              <div className={css["item-img"]}>
                <Link
                  href={`/p/${item.category}/${item.subcategory}/${item.id}?c=${item.color}`}
                >
                  <img src={item.img} alt="img-ref" />
                </Link>
                <div className={`${css["item-props"]} sm-dt-hide`}>
                  <div className={css["item-title"]}>{item.title}</div>
                  <div className={css["other-info"]}>
                    <div>SKU : {item.sku}</div>
                    <div>Color : {item.colorName}</div>
                    <div>Size : {item.size}</div>
                    <div
                      className="sm-dt-hide"
                      style={{
                        marginTop: "1rem",
                        fontSize: "1rem",
                        fontWeight: "500",
                      }}
                    >
                      {item.qty > 1 ? <div>{item.qty} Items</div> : null}
                      <div>{stringifyPrice(item.priceTotal)}</div>
                    </div>
                  </div>
                  <ProductQty
                    setSelectedQty={_setCustomQty}
                    selectedQty={item.qty}
                  />
                  <div className={`${css["deliveryMethod"]} sm-dt-show`}>
                    <div>
                      <input type="radio" />
                      <input type="radio" checked readOnly />
                    </div>
                    <div>
                      <label>
                        <PickupSVG />
                        Select A Store
                      </label>
                      <label>
                        <MdOutlineLocalShipping />
                        Ship To An Address
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${css["item-props"]} sm-dt-show`}>
                <div className={css["item-title"]}>{item.title}</div>
                <div className={css["other-info"]}>
                  <div>SKU : {item.sku}</div>
                  <div>Color : {item.colorName}</div>
                  <div>Size : {item.size}</div>
                </div>
                <ProductQty
                  setSelectedQty={_setCustomQty}
                  selectedQty={item.qty}
                />
                <div className={`${css["deliveryMethod"]} sm-dt-show`}>
                  <div>
                    <input type="radio" disabled />
                    <input type="radio" checked readOnly />
                  </div>
                  <div>
                    <label htmlFor="pick-up">
                      <PickupSVG />
                      Select A Store
                    </label>
                    <label htmlFor="shipment">
                      <MdOutlineLocalShipping />
                      Ship To An Address
                    </label>
                  </div>
                </div>
              </div>
              <div className={`${css["deliveryMethod"]} sm-dt-hide`}>
                <div>
                  <input type="radio" disabled />
                  <input type="radio" checked readOnly />
                </div>
                <div>
                  <label htmlFor="pick-up">
                    <PickupSVG />
                    Select A Store
                  </label>
                  <label htmlFor="shipment">
                    <MdOutlineLocalShipping />
                    Ship To An Address
                  </label>
                </div>
              </div>
              <div className={`${css["item-price"]} sm-dt-show`}>
                {stringifyPrice(item.priceTotal)}
              </div>
              <div className={css["item-utils"]}>
                <span>Save For Later</span>
                <span className={css["disabled"]}>Edit</span>
                <span
                  onClick={() => {
                    setConfirmActionRenderDetails({
                      actionItem: item,
                      render: true,
                    });
                  }}
                >
                  Remove
                </span>
              </div>
            </div>
            <Divider
              marginTop="2rem"
              marginBottom={i != bag.length - 1 ? "2rem" : "0rem"}
            />
          </div>
        );
      })}
      {confirmActionRenderDetails.render ? (
        <ConfirmActionModal
          actionMsg={actionMsg}
          confirmAction={confirmAction}
          backShadow={true}
          rejectAction={rejectAction}
          rejectText={"Nevermind"}
          confirmText={"Remove Item"}
        />
      ) : null}
    </>
  );
};

const BagContent = ({ setCustomQty, bag, totalItems, removeItemFromBag }) => {
  return (
    <div className={css["bag-content"]}>
      <div className={css["reg-benefits"]}>
        <div className={css["options"]}>
          <Variant1 buttonText="Register" style={{ width: "100%" }} />
          <Variant1 buttonText="Log In" style={{ width: "100%" }} />
        </div>
        <div className={css["benefits"]}>
          <div>
            <AiOutlineShoppingCart /> Faster checkout
          </div>
          <div>
            <GoArrowSwitch /> Easier returns and exchanges
          </div>
          <div>
            <BiPackage /> Quick order information and tracking
          </div>
        </div>
      </div>
      <div className={css["bag-items"]}>
        <div className={css["bag-info"]}>
          <span className={css["bag-count"]}>Your Bag</span>
          <span>
            ({totalItems} {totalItems > 1 ? "Item" : "Items"})
          </span>
          <Divider marginTop="2rem" marginBottom="1rem" />
          {totalItems ? (
            <>
              <span className={css["shipping-type"]}>Shipping</span>
              <div className={css["items"]}>
                <Items
                  bag={bag}
                  setCustomQty={setCustomQty}
                  removeItemFromBag={removeItemFromBag}
                />
              </div>
            </>
          ) : (
            <div>
              <div>
                <span style={{ fontWeight: "500" }}>Uh-oh. It’s empty!</span>
              </div>
              <div>
                <span>
                  Don't know where to start? Here's the gear everyone's after.
                </span>
              </div>
              <Variant2
                buttonText="Shop Best Seller"
                style={{
                  paddingRight: "1rem",
                  paddingLeft: "1rem",
                  marginTop: "2rem",
                }}
              />
            </div>
          )}
        </div>
        <Divider marginTop="2rem" />
        <div className="sm-dt-show">
          <ProductRecommended
            titleClass={css["title-class"]}
            imgHeight={css["img-height"]}
          />
        </div>
      </div>
    </div>
  );
};

const OrderSummary = ({
  subTotal,
  totalItems,
  remainingToFreeShipmentInPercentage,
  isShipmentFree,
}) => {
  if (!totalItems) return <div className={css["order-summary"]}></div>;

  return (
    <div className={css["order-summary"]}>
      <div className={css["total-summary"]}>
        <div className={css["title"]}>Order Summary</div>
        <div className={css["total-sum"]}>
          <div>
            <span>Subtotal ({totalItems}):</span>
            <span>{stringifyPrice(subTotal)}</span>
          </div>
          <div>
            <span>Estimated Tax:</span>
            <span>$0.00</span>
          </div>
          <div>
            <span>Estimated Shipping:</span>
            <span>
              {isShipmentFree ? (
                <span style={{ color: "#00834b" }}>Free</span>
              ) : (
                "$4.99"
              )}
            </span>
          </div>
        </div>
        <div className={css["free-shipping"]}>
          <div>
            {isShipmentFree ? (
              <span
                style={{
                  color: "#00834b",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                }}
              >
                {" "}
                <AiOutlineCheck
                  style={{ marginRight: "1rem", fontSize: "1.5rem" }}
                />{" "}
                You qualify for free shipping!
              </span>
            ) : (
              <span style={{ fontWeight: "500" }}>
                {stringifyPrice(100 - subTotal)}{" "}
                <span style={{ marginLeft: "0.5rem" }}>
                  Away from free shipping
                </span>
              </span>
            )}
          </div>
          <div className={css["free-shipping-primary"]}>
            <div
              className={css["free-shipping-bar"]}
              style={{
                backgroundColor: isShipmentFree ? "#00834b" : "black",
                width: isShipmentFree
                  ? "100%"
                  : remainingToFreeShipmentInPercentage,
              }}
            ></div>
          </div>
        </div>
      </div>
      <Divider marginTop="2rem" marginBottom="2rem" />
      <div className={css["estimated-total"]}>
        <div className={css["total"]}>
          <span>Estimated Total:</span>
          <span>{stringifyPrice(subTotal)}</span>
        </div>
        <div className={css["klarna"]}>
          <span>
            4 interest-free payments of{" "}
            {stringifyPrice((subTotal / 4).toFixed(2))} .{" "}
            <span style={{ fontWeight: "600" }}>Klarna</span>.{" "}
            <span style={{ textDecoration: "underline", cursor: "pointer" }}>
              Learn more
            </span>
          </span>
        </div>
      </div>
      <Divider marginTop="2rem" marginBottom="1rem" />
      <div className={css["promo-code"]}>
        <div className={css["title"]}>Apply Promo Code</div>
        <div className={css["promo"]}>
          <input type="text" />
          <Variant2 buttonText="Apply" style={{ flexBasis: "35%" }} />
        </div>
      </div>
      <div className={css["payment-container"]}>
        <div className={css["payment"]}>
          <div className={`${css["total"]} sm-dt-hide`}>
            <span>Estimated Total:</span>
            <span>{stringifyPrice(subTotal)}</span>
          </div>
          <div className={css["options"]}>
            <Variant2
              buttonText="Checkout"
              style={{
                background: "#dc0019",
                width: "100%",
                marginTop: "1.5rem",
              }}
            />
            <Variant2
              style={{
                backgroundColor: "#ffff",
                padding: "0",
                width: "100%",
                marginTop: "1.5rem",
                border: "1px solid black",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "2.8rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "200%",
                    objectFit: "contain",
                  }}
                  alt="paypal"
                  src="imgs/paypal.png"
                ></img>
              </div>
            </Variant2>
          </div>
        </div>
      </div>
      <div className="sm-dt-hide">
        <ProductRecommended
          titleClass={css["title-class"]}
          imgHeight={css["img-height"]}
        />
      </div>
    </div>
  );
};

export const getServerSideProps = (ctx) => {
  return {
    props: getEssentialServerSideProps(ctx),
  };
};

export default Cart;
