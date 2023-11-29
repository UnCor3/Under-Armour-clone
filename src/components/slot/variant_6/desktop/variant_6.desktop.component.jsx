import css from "./variant_6.desktop.styles.module.css";

const VARIANT_6_DESKTOP = ({ content }) => {
  return (
    <div className={css["container"]}>
      <div className={css["imgs"]}>
        {content.map((item, i) => (
          <div className={css["img"]} key={i}>
            <div className={css["img-wrapper"]}>
              <img alt="slot-img" src={item.img.desktop} />
            </div>
            <div className={css["bottom-promo-text"]}>
              <span>{item.promoText}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VARIANT_6_DESKTOP;
