import { forwardRef, useState, useRef, useEffect } from "react";
import css from "./ua-category.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { getCategory } from "@/lib/server-helpers";
import { PRODUCT_DATA } from "@/server-data/server-data";
import XButtonComponent from "@/components/button/x-button/x-button.component";
import Divider from "@/components/divider/divider.component";
import withExtendable from "@/hocs/withExtendable.hoc.component";
import {
  capitalizeFirstLetter,
  debounce,
  greaterThanOne,
  makeBodyNotScrollable,
  makeBodyScrollable,
} from "@/helper/helper";
import { filterWays } from "@/data/data";
import Link from "next/link";
import { getEssentialServerSideProps } from "@/context/essential.context";
import Head from "next/head";

const Category = (props) => {
  const asideRef = useRef();
  const [isCatDropdownOpen, setIsCatDropdownOpen] = useState(false);
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const handleToggleCatDropdown = () => setIsCatDropdownOpen((prev) => !prev);
  const handleToggleFilterPanel = () => setIsFilterPanelOpen((prev) => !prev);

  useEffect(() => {
    //changing the height of filter sidebar
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      if (!scrolled && asideRef.current)
        asideRef.current.removeAttribute("style");
      if (scrolled && asideRef.current && asideRef.current.style.height === "")
        asideRef.current.style.height = "min-content";
    };
    const debouncedHandleScroll = debounce(handleScroll, 200);
    const scrollListener = () => {
      debouncedHandleScroll();
    };
    const listener = window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const productData = JSON.parse(props.productData),
    categoryData = JSON.parse(props.categoryData);

  const SEOCategory = `UA-${capitalizeFirstLetter(categoryData.category)}`;

  return (
    <>
      <Head>
        <title>{SEOCategory}</title>
        <meta property="og:title" content={SEOCategory} />
        <meta name="twitter:title" content={SEOCategory} />
      </Head>
      <div className={css["category-container"]}>
        <div className={css["filters-and-categories"]}>
          <div className={css["cat"]} onClick={handleToggleCatDropdown}>
            Men
            <MdKeyboardArrowRight
              style={{
                transform: isCatDropdownOpen
                  ? "rotate(-90deg)"
                  : "rotate(90deg)",
                transition: "all 300ms ease",
                fontSize: "1.5rem",
              }}
            />
          </div>
          <div className={css["filter"]} onClick={handleToggleFilterPanel}>
            Filter / Sort
          </div>
          <CatDropDown
            isCatDropdownOpen={isCatDropdownOpen}
            categoryData={categoryData}
          />
          {isFilterPanelOpen ? (
            <FilterPanel
              isFilterPanelOpen={isFilterPanelOpen}
              setIsFilterPanelOpen={setIsFilterPanelOpen}
            />
          ) : null}
        </div>

        <div className={css["items-container"]}>
          <div className={css["item-cat"]}>
            <span>Men</span>
          </div>
          <div className={css["items-info"]}>
            <div className={css["cat"]}>Men's</div>
            <div className={`${css["item-count"]} sm-dt-hide`}>
              ({productData.length}) Items
            </div>
            <div className={`${css["dt-sort"]} sm-dt-show`}>
              <span>({productData.length} Items)</span>
              <Legend />
            </div>
          </div>
          <div className={css["dt"]}>
            <aside
              className={`${css["filters-and-categories-desktop"]} sm-dt-show`}
              ref={asideRef}
            >
              <div className={`${css["filter-top"]} sm-dt-show`}>
                <div style={{ fontWeight: 500, marginBottom: "1rem" }}>
                  {capitalizeFirstLetter(categoryData.category)}
                </div>
                <ul>
                  {categoryData.subCategories.map((item, i) => {
                    return <li key={i}>{item}</li>;
                  })}
                </ul>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0 1rem",
                    marginBottom: "2rem",
                  }}
                >
                  <div>Filter</div>
                  <div style={{ color: "grey" }}>Clear all</div>
                </div>
              </div>

              {filterWays.map((item, i) => {
                return (
                  <ExtendableFilterOptionsContent
                    text={item.name}
                    iterableText={item.ways}
                    type={item.type}
                    key={i}
                  />
                );
              })}
            </aside>
            <Items items={productData} />
          </div>
        </div>
      </div>
    </>
  );
};

const FilterPanel = ({ setIsFilterPanelOpen }) => {
  useEffect(() => {
    makeBodyNotScrollable();
    return () => {
      makeBodyScrollable();
    };
  }, []);
  return (
    <div className={css["filter-panel"]}>
      <div className={css["filter-actions"]}>
        <div>Clear All</div>
        <div>Filter</div>
        <div onClick={() => setIsFilterPanelOpen(false)}>
          <XButtonComponent />
        </div>
      </div>
      <Divider />
      <div
        style={{
          textAlign: "left",
          marginTop: "1rem",
          paddingRight: "0.5rem",
          background: "white",
          height: "calc(100vh - 100%)",
        }}
      >
        {filterWays.map((item, i) => {
          return (
            <ExtendableFilterOptionsContent
              text={item.name}
              iterableText={item.ways}
              type={item.type}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

const CatDropDown = ({ isCatDropdownOpen, categoryData }) => {
  if (!isCatDropdownOpen) return;

  return (
    <div className={css["cat-dropdown-container"]}>
      {categoryData.subCategories.map((cat, i) => {
        return <div key={i}>{cat}</div>;
      })}
    </div>
  );
};

const Items = ({ items }) => {
  return (
    <div className={css["items"]}>
      {items.map((item, i) => {
        return (
          <div key={i}>
            <div className={css["img-container"]}>
              <Link href={`/p/${item.category}/${item.subCategory}/${item.id}`}>
                <img
                  src={item.colorOptions[0].colorProps.imgs[0]}
                  alt="category-item-img"
                />
              </Link>
            </div>
            <div className={css["product-info"]}>
              <dir className={css["color"]}>
                {greaterThanOne(item.colorOptions.length)
                  ? `${item.colorOptions.length} Colors `
                  : `1 Color`}
              </dir>
              <dir className={css["title"]}>{item.fullName}</dir>
              <dir className={css["price"]}>
                {item.colorOptions[0].colorProps.price}
              </dir>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Legend = withExtendable(
  forwardRef(function Legend({ extendHandler }, ref) {
    const { isExtended, setIsExtended } = extendHandler;

    const [currentType, setCurrentType] = useState("Now trending");

    const sortTypes = [
      "Now trending",
      "Best Sellers",
      "Price(Low-High)",
      "Price(High-Low)",
      "Top Rated",
      "Newest",
    ];

    return (
      <div
        className={css["product-sort"]}
        onClick={() => setIsExtended((prev) => !prev)}
        data-active={JSON.stringify(isExtended)}
      >
        <span className={css["product-sort-top"]}>Sort</span>
        <span>{currentType}</span>
        <div className={css["arrow"]} data-active={JSON.stringify(isExtended)}>
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            data-caret-icon="true"
            role="graphics-symbol"
            aria-hidden="true"
            width="16"
            height="16"
            color="currentColor"
          >
            <path
              d="M2 11L7.98939 5.01061C7.99525 5.00475 8.00475 5.00475 8.01061 5.01061L14 11"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <ul
          className={css["product-sort-data"]}
          data-active={JSON.stringify(isExtended)}
          ref={ref}
        >
          {sortTypes.map((type, i) => (
            <li
              onClick={() => setCurrentType(type)}
              data-active={type === currentType}
              key={i}
            >
              {type}
            </li>
          ))}
        </ul>
      </div>
    );
  })
);

const ExtendableFilterOptionsContent = withExtendable(
  forwardRef(function ExtendableFilterOptionsContent(
    { extendHandler, Arrow, text, iterableText, type, key },
    ref
  ) {
    const { isExtended, setIsExtended } = extendHandler;
    const divRef = useRef();

    return (
      <div
        ref={divRef}
        onClick={!isExtended ? () => setIsExtended(true) : () => {}}
        style={{
          cursor: "pointer",
          padding: isExtended ? "0rem 1rem 1rem 1rem" : "0rem 1rem 0rem 1rem",
        }}
        key={key}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
          onClick={() => setIsExtended(false)}
        >
          <div
            style={{
              marginBottom: "1rem",
              fontWeight: "500",
              fontSize: "0.9rem",
            }}
          >
            {text}
          </div>
          <Arrow />
        </div>
        {!isExtended ? <Divider /> : null}
        <ul
          ref={ref}
          style={{
            overflow: "hidden",
            paddingTop: "0.2rem",
            paddingBottom: text === "Color" && isExtended ? "0.8rem" : null,
            transition: "all ease 200ms",
            listStyle: "none",
            fontSize: "0.9rem",
            display: "flex",
            flexDirection: text === "Color" ? "row" : "column",
            gap: "1rem",
          }}
        >
          {iterableText.map((_text, i) => {
            return type === "radio" ? (
              <li key={i}>
                <input type="radio" style={{ marginRight: "0.5rem" }} />
                <label>{_text}</label>
              </li>
            ) : type === "checkbox" ? (
              <li key={i}>
                <input type="checkbox" style={{ marginRight: "0.5rem" }} />
                <label>{_text}</label>
              </li>
            ) : type === "color" ? (
              <li
                key={i}
                style={{
                  backgroundColor: _text.toString(),
                  borderRadius: "100%",
                  height: "10px",
                  width: "10px",
                  border: _text === "white" ? "1px solid black" : null,
                }}
              ></li>
            ) : (
              <li key={i}>{_text}</li>
            );
          })}
          {type != "color" ? <Divider /> : null}
        </ul>
      </div>
    );
  })
);

export const getServerSideProps = (ctx) => {
  const { category } = ctx.params;
  const categoryData = getCategory(category);

  if (!category || !categoryData)
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
      props: {},
    };

  return {
    props: {
      categoryData: JSON.stringify(categoryData),
      productData: JSON.stringify(PRODUCT_DATA),
      ...getEssentialServerSideProps(ctx),
    },
  };
};

export default Category;
