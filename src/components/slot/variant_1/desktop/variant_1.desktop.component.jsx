import css from "./variant_1.desktop.styles.module.css";
import Link from "next/link";

const VARIANT_1_DESKTOP = ({
  content: { firstText, secondText, lastText, promoText, img, imgAlt },
}) => {
  return (
    <div className={css["container"]} dt="dt">
      <div className={css["content"]}>
        <img src={img.desktop} alt={imgAlt} />
        <div className={css["teaser-text"]}>
          <div>
            <span>{firstText}</span>
          </div>
          <div>
            {Array.isArray(secondText)
              ? secondText.map((text, i) => <p key={i}>{text}</p>)
              : secondText}
          </div>
          <div>
            <span>{lastText}</span>
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

export default VARIANT_1_DESKTOP;
