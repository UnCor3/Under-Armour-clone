import css from "./variant_2.desktop.styles.module.css";
import Link from "next/link";

const VARIANT_2_DESKTOP = ({
  content: { firstText, bottomText: midText, promoText, img, imgAlt },
}) => {
  return (
    <div className={css["container"]}>
      <div className={css["content"]}>
        <img className={css["content-img"]} src={img.desktop} alt={imgAlt} />
        <div className={css["teaser-text"]}>
          <div>
            <span>{firstText}</span>
          </div>
          <div>
            <span>{midText}</span>
          </div>
          <div>
            <Link href="/c/mens">
              <span>{promoText}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VARIANT_2_DESKTOP;
