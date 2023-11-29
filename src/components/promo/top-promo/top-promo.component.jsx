import css from "./top-promo.styles.module.css";

const TopPromo = () => {
  return (
    <div>
      <p className={css["promo"]}>
        <a href="#shop">FREE U.S. Shipping Orders $99+ & FREE Returns</a>
      </p>
    </div>
  );
};

export default TopPromo;
