import css from "./variant_2.mobile.styles.module.css";
import Link from "next/link";

const VARIANT_2_MOBILE = ({
  content: { firstText, bottomText, promoText, img, imgAlt },
}) => {
  return (
    <div className={css["container"]}>
      <div className={css["img"]}>
        <img src={img.mobile} alt={imgAlt} />
      </div>
      <div className={css["teaser-text"]}>
        <div className={css["top-text"]}>
          <div>
            <p>{firstText}</p>
          </div>
          <div>
            <p>{bottomText}</p>
          </div>
        </div>
        <div className={css["bottom-promo-text"]}></div>
        <Link href="/c/mens">{promoText}</Link>
      </div>
    </div>
  );
};

export default VARIANT_2_MOBILE;
