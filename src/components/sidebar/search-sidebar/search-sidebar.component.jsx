import { useContext, useEffect, useRef, useState } from "react";
import { SideBarContext } from "../../../context/sideBar.context";
import Divider from "../../divider/divider.component";
import css from "./search-sidebar.styles.module.css";
import Logo from "../../logo/logo";
import XButtonComponent from "../../button/x-button/x-button.component";
import { AiOutlineSearch } from "react-icons/ai";
import BackShadow from "../../back-shadow/back-shadow.component";
import useNextImageOnHover from "../../../hooks/useNextImageOnHover.hook";
import { makeBodyNotScrollable, makeBodyScrollable } from "@/helper/helper";

const SearchSideBar = () => {
  const {
    isSearchSideBarOpen,
    setIsSearchSideBarOpen,
    searchTerm,
    setSearchTerm,
    SEARCH_DATA,
  } = useContext(SideBarContext);

  const [matchedItems, setMatchedItems] = useState([]);

  const desktopSearchBarRef = useRef();

  useEffect(() => {
    const matchedItems = searchTerm.length
      ? SEARCH_DATA.filter((item) => {
          return item.title.toLowerCase().includes(searchTerm.toLowerCase());
        })
      : [];
    setMatchedItems(matchedItems);
  }, [searchTerm]);

  useEffect(() => {
    if (window.innerWidth > 1023) return;
    if (isSearchSideBarOpen) {
      makeBodyNotScrollable();
    } else {
      makeBodyScrollable();
    }
  }, [isSearchSideBarOpen]);

  const handleCloseSideBar = () => setIsSearchSideBarOpen(false);

  return (
    <BackShadow
      className={css["back-shadow"]}
      data-active={isSearchSideBarOpen}
      closeOnClick={false}
      initRender={true}
      doesHaveTrigger={false}
      closeOnBackgroundHover={false}
      test="test"
      displayOnMobile={true}
    >
      <div
        className={css["side-bar-container"]}
        style={{ width: isSearchSideBarOpen ? "100%" : "0" }}
        ref={desktopSearchBarRef}
      >
        <div className={css["top"]}>
          <div></div>
          <div>
            <Logo />
          </div>
          <div>
            <XButtonComponent
              onClick={handleCloseSideBar}
              width="1px"
              height="24px"
            />
          </div>
        </div>
        <Divider margin={"0"} />
        <div className="bottom">
          <div className={css["search-box"]}>
            <input
              type="text"
              placeholder="Search UA"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <AiOutlineSearch style={{}} />
            {searchTerm ? (
              <div
                onClick={() => {
                  setSearchTerm("");
                  setMatchedItems([]);
                }}
                style={{ width: "20px", height: "20px" }}
              >
                <XButtonComponent height="15px" />
              </div>
            ) : null}
          </div>
          {matchedItems.length ? (
            <div className={css["matching-products-container"]}>
              <p style={{ paddingLeft: "0.6rem" }}>Top Products</p>
              <div className={css["matching-products"]}>
                {matchedItems.map((item, i) => {
                  return <Item item={item} key={i} />;
                })}
              </div>
            </div>
          ) : null}
          {!matchedItems.length && searchTerm ? (
            <span className={css["no-results"]}>No results</span>
          ) : null}
          <div className={css["also-look-for"]}>
            <p>
              Try browsing <span>Mens</span>, <span>Womens</span>,{" "}
              <span>Boys</span>, <span>Girls</span>, <span>New Arrivals</span>,{" "}
              <span>Best Sellers</span>
            </p>
          </div>
        </div>
      </div>
    </BackShadow>
  );
};

const Item = ({ item }) => {
  const ref = useRef();

  useNextImageOnHover(ref, item.imgs);

  return (
    <div>
      <a href={`p/${item.category}/${item.subCategory}/${item.id}`}>
        <img src={item.imgs.initialSrc} alt={item.title} ref={ref} />
      </a>
      <div className={css["props"]}>
        <div>
          <span>{item.colorCount} Colors</span>
        </div>
        <div>{item.title}</div>
        <div>{item.price.withoutDiscount}</div>
      </div>
    </div>
  );
};

export default SearchSideBar;
