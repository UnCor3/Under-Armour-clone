import css from "./variant_1.mobile.styles.module.css";
import Link from "next/link";

const VARIANT_1_MOBILE = ({
  content: { firstText, secondText, lastText, promoText, img, imgAlt },
}) => {
  return (
    <div className={css["container"]}>
      <div className={css["img"]}>
        <img src={img.mobile} alt={imgAlt} />
      </div>
      <div className={css["teaser-text"]}>
        <div className={css["text-top"]}>
          <div>
            <p>{firstText}</p>
          </div>
          <div>
            {Array.isArray(secondText) ? (
              secondText.map((text, i) => <p key={i}>{text}</p>)
            ) : (
              <p>{secondText}</p>
            )}
          </div>
          <div>
            <p>{lastText}</p>
          </div>
        </div>
        <div className={css["bottom-promo-text"]}>
          <Link href="/c/mens">{promoText}</Link>
        </div>
      </div>
    </div>
  );
};

export default VARIANT_1_MOBILE;
