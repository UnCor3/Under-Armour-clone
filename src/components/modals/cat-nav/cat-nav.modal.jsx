import BackShadow from "../../back-shadow/back-shadow.component";
import { NavContext } from "../../../context/nav.context";
import css from "./cat-nav.styles.module.css";
import { useContext } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const CatNavHoverMenu = ({ MENU_DATA, catHovered }) => {
  return (
    <div className={css["hover-container"]}>
      <div className={css["hover-content"]}>
        {MENU_DATA[catHovered] ? (
          <>
            <div className={css["cat-img"]}>
              <img
                src={MENU_DATA[catHovered].img.src}
                srcSet={MENU_DATA[catHovered].img.srcSet}
                alt="Cat"
              />
              <div>{MENU_DATA[catHovered].promo.text}</div>
              <div>
                <span
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  {MENU_DATA[catHovered].promo.action}
                </span>
              </div>
            </div>
            <dir className={css["cat-content"]}>
              {MENU_DATA[catHovered].titles.map((title, i) => {
                return (
                  <div className={css["sub-titles"]} key={i}>
                    <div className={css["sub-tit-header"]}>{title.name}</div>
                    <div className={css["sub-tit-content"]}>
                      {title.subs.map((sub, i) => {
                        return (
                          <div key={i}>
                            <span>{sub}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </dir>
          </>
        ) : null}
      </div>
    </div>
  );
};

const CatNavModal = () => {
  const { MENU_DATA, catHovered } = useContext(NavContext);
  return (
    <BackShadow
      trigger={"cat-nav-modal"}
      closeTriggers={"cat-nav-modal-close"}
      closeOnBackgroundHover={true}
      className={css["back-shadow"]}
    >
      <CatNavHoverMenu MENU_DATA={MENU_DATA} catHovered={catHovered} />
    </BackShadow>
  );
};

export default dynamic(() => Promise.resolve(CatNavModal), { ssr: false });
