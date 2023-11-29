import css from "./subCategory.styles.module.css";
import { useRef, useEffect } from "react";
import { Arrow } from "../../svgs/svgs.component";

const subCat = ({ cat, setIsSubCategoriesHidden, backArrowRef }) => {
  backArrowRef.current.style.visibility = "visible";
  useEffect(() => {
    setIsSubCategoriesHidden(false);
  }, []);

  return (
    <>
      <div className={css["subCat"]}>
        <span>{cat.catName}</span>
        {cat.extendable.map((item, i) => (
          <div key={i} className={`${css["cat"]} ${css["extendable"]}`}>
            <ExtendableList items={item.subCats} title={item.title} />
          </div>
        ))}
        {cat.nonExtendable.map((item, i) => (
          <div key={i} className={css["cat"]}>
            <div>
              <a>{item.title}</a>
            </div>
          </div>
        ))}

        {cat.byTitles.map((item, i) => (
          <div key={i}>
            <div className={css["cat"]}>
              <div style={{ fontWeight: 700 }}>
                <a>{item.name}</a>
              </div>
            </div>
            <ByTitle items={item.subCats} />
          </div>
        ))}
      </div>
    </>
  );
};

const ByTitle = ({ items }) => {
  return (
    <>
      {items.map((item, i) => (
        <div key={i} className={css["cat"]}>
          <div>
            <a>{item}</a>
          </div>
        </div>
      ))}
    </>
  );
};

//*A better approach to withExtendableHoc if states are not needed
const ExtendableList = ({ items, title }) => {
  const extenderRef = useRef();
  const arrowRef = useRef();
  const handleExtendAnimated = () => {
    if (extenderRef.current.getBoundingClientRect().height == 0) {
      arrowRef.current.style.rotate = "0deg";
      extenderRef.current.style.height =
        extenderRef.current.scrollHeight + "px";
      return;
    }
    extenderRef.current.style.height = 0;
    arrowRef.current.style.rotate = "180deg";
  };
  return (
    <>
      <span onClick={handleExtendAnimated} style={{ display: "block" }}>
        {title}
        <Arrow
          _ref={arrowRef}
          style={{
            position: "absolute",
            right: "1rem",
            rotate: "180deg",
            transition: "all 300ms ease",
          }}
        />
      </span>
      <div
        className={css["extended"]}
        ref={extenderRef}
        style={{ height: 0, overflow: "hidden" }}
      >
        {items.map((item, i) => (
          <a key={i} href={"#" + item}>
            {item}
          </a>
        ))}
      </div>
    </>
  );
};

export default subCat;
