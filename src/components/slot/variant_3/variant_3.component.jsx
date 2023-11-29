import Link from "next/link";
import css from "./variant_3.styles.module.css";

const VARIANT_3 = () => {
  return (
    <div className={css["component-wrapper"]}>
      <div className={css["component-title"]}>
        <p>Shop Back To School</p>
      </div>
      <div className={css["component-carousel"]}>
        <div>
          <div>
            <Link href="/c/mens">
              <img
                src="imgs/index/FW23_AMR_BTS_Site_NavTiles_NA_1_1_M_alt2.webp"
                alt="ua"
              />
            </Link>
            <div className={css["component-shop-branch"]}>
              <p>Shop Men</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Link href="/c/mens">
              <img
                src="imgs/index/FW23_AMR_BTS_Site_NavTiles_NA_1_1_W_alt2.webp"
                alt="ua"
              />
            </Link>
            <div className={css["component-shop-branch"]}>
              <p>Shop Women</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Link href="/c/mens">
              <img
                src="imgs/index/FW23_AMR_BTS_Site_NavTiles_NA_1_1_G_alt2.webp"
                alt="ua"
              />
            </Link>
            <div className={css["component-shop-branch"]}>
              <p>Shop Kids</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Link href="/c/mens">
              <img
                src="imgs/index/FW23_AMR_BTS_Site_NavTiles_NA_1_1_Backpacks_alt2.webp"
                alt="ua"
              />
            </Link>
            <div className={css["component-shop-branch"]}>
              <p>Shop Backpacks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VARIANT_3;
