import css from "./variant_5.styles.module.css";
import { AiOutlineInstagram } from "react-icons/ai";

const VARIANT_5 = () => {
  return (
    <div className={css["shop-ig"]}>
      <div className={css["title"]}>
        <div>Shop Our Instagram</div>
        <div>
          <span>Explore the Gallery</span>
        </div>
      </div>
      <div className={css["imgs-container"]}>
        <div className={css["img"]}>
          <div className={css["small-img"]}>
            <div>
              <picture>
                <img alt="slot-img" src="imgs/index/ig_5.webp"></img>
                <IGLogo />
              </picture>
              <IGLogo />
              <ShopNowOnHover />
            </div>
            <div>
              <picture>
                <img alt="slot-img" src="imgs/index/ig_6.webp"></img>
                <IGLogo />
              </picture>
              <IGLogo />
              <ShopNowOnHover />
            </div>
          </div>
          <div className={css["tall-img"]}>
            <picture>
              <img alt="slot-img" src="imgs/index/ig_1.webp"></img>
              <IGLogo />
            </picture>
            <IGLogo />
            <ShopNowOnHover />
          </div>
        </div>
        <div className={css["img"]}>
          <div className={css["small-img"]}>
            <div>
              <picture>
                <img alt="slot-img" src="imgs/index/ig_3.webp" />
              </picture>
              <IGLogo />
              <ShopNowOnHover />
            </div>
            <div>
              <picture>
                <img alt="slot-img" src="imgs/index/ig_4.webp" />
              </picture>
              <IGLogo />
              <ShopNowOnHover />
            </div>
          </div>
          <div className={css["tall-img"]}>
            <picture>
              <img alt="slot-img" src="imgs/index/ig_2.webp" />
            </picture>
            <IGLogo />
            <ShopNowOnHover />
          </div>
        </div>
      </div>
    </div>
  );
};

const IGLogo = () => {
  return (
    <div className={css["ig"]}>
      <AiOutlineInstagram />
    </div>
  );
};

const ShopNowOnHover = () => {
  return (
    <div className={css["shop-now"]}>
      <div></div>
      <button>Shop Now</button>
    </div>
  );
};

export default VARIANT_5;
