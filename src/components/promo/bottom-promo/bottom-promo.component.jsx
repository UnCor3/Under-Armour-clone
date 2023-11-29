import css from "./bottom-promo.styles.module.css";

const BottomPromo = () => {
  return (
    <div className={css["bottom-promo"]}>
      <a className={css["promo-text"]}>
        25% Off Backpacks! No Code Needed. Shop Now.
        <span>See details</span>
      </a>
    </div>
  );
};

export default BottomPromo;
