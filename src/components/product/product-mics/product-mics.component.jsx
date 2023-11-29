import withExtendable from "../../../hocs/withExtendable.hoc.component";
import css from "./product-mics.styles.module.css";
import { GoArrowSwitch } from "react-icons/go";
import { forwardRef } from "react";

export const FreeReturnsAndExchange = withExtendable(
  forwardRef(function FreeReturnsAndExchange({ extendHandler, Arrow }, ref) {
    const { isExtended, setIsExtended } = extendHandler;

    return (
      <div
        className={css["return-container"]}
        onClick={() => setIsExtended((prev) => !prev)}
      >
        <div className={css["upper-text"]}>
          <div>
            <GoArrowSwitch />
            <div>
              <span>Free Returns & Exchanges</span>
            </div>
          </div>
          <Arrow />
        </div>
        <div
          className={css["return-text"]}
          data-active={JSON.stringify(isExtended)}
          ref={ref}
        >
          Try it on at home! We offer free returns and exchanges within 60 days
          if purchased from UA.com, app, or a store location. It’s fast and
          easy.{" "}
          <div>
            <span>
              <span>Learn more</span>
            </span>
          </div>
        </div>
      </div>
    );
  })
);

export const RateUs = () => (
  <div>
    <span
      style={{
        fontSize: "0.7rem",
        textDecoration: "underline",
        color: "#5f5f5f",
        paddingLeft: "1rem",
      }}
    >
      How would you rate our products and descriptions?
    </span>
  </div>
);
