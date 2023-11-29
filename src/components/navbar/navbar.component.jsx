import XButtonComponent from "../button/x-button/x-button.component";
import React, { useContext, useEffect, useRef } from "react";
import TopPromo from "../promo/top-promo/top-promo.component";
import { SideBarContext } from "../../context/sideBar.context";
import BagModal from "../modals/bag-modal/bag.modal";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Divider from "../divider/divider.component";
import { NavContext } from "@/context/nav.context";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidDownArrow } from "react-icons/bi";
import css from "./navbar.styles.module.css";
import { CAT_DATA } from "../../data/data";
import { PiHeart } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import Logo from "../logo/logo";
import Link from "next/link";
import { useBagCtx } from "@/context/bag.context";
import { calculateTotalItems } from "@/helper/helper";

const Navbar = () => {
  const {
    setIsHamSideBarOpen,
    setIsSearchSideBarOpen,
    isSearchSideBarOpen,
    setSearchTerm,
  } = useContext(SideBarContext);

  const { catHovered, setCatHovered } = useContext(NavContext);

  const handleOpenHamSideBar = () => setIsHamSideBarOpen((prev) => !prev);
  const handleOpenSearchSideBar = () => setIsSearchSideBarOpen(true);
  const handleCloseSearchSideBar = () => setIsSearchSideBarOpen(false);

  return (
    <nav className={css["nav-container"]}>
      <NavTop />
      <Divider marginBottom={0} backgroundColor={"#ffff"} />
      <NavBottom
        handleCloseSearchSideBar={handleCloseSearchSideBar}
        handleOpenSearchSideBar={handleOpenSearchSideBar}
        isSearchSideBarOpen={isSearchSideBarOpen}
        setSearchTerm={setSearchTerm}
        setCatHovered={setCatHovered}
        catHovered={catHovered}
      />
      <MobileNav
        handleOpenHamSideBar={handleOpenHamSideBar}
        handleOpenSearchSideBar={handleOpenSearchSideBar}
      />
      <Divider
        className={"mb-hide"}
        marginBottom={0}
        backgroundColor={"#ffff"}
      />
    </nav>
  );
};

const MobileNav = ({ handleOpenHamSideBar, handleOpenSearchSideBar }) => {
  return (
    <nav className={css["mobile-nav"]}>
      <div className={css["nav"]}>
        <div>
          <button className={css["nav-button"]}>
            <RxHamburgerMenu
              onClick={handleOpenHamSideBar}
              style={{ cursor: "pointer" }}
            />
          </button>
          <button className={css["nav-button"]}>
            <CiUser />
          </button>
        </div>
        <div className={css["nav-brand"]}>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div>
          <button className={css["nav-button"]}>
            <AiOutlineSearch
              onClick={handleOpenSearchSideBar}
              style={{ cursor: "pointer" }}
            />
          </button>
          <button className={css["nav-button"]} id="bag">
            <Link
              href="/cart"
              style={{ display: "flex", alignItems: "center" }}
            >
              <HiOutlineShoppingBag />
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

const ShoppingCart = () => {
  const {
    bagContext: { bag },
  } = useBagCtx();
  return (
    <button className={`${css["nav-button"]} ${css["shopping-bag"]}`}>
      {bag.length ? (
        <div className={css["item-count"]}>{calculateTotalItems(bag)}</div>
      ) : null}
      <Link href="/cart">
        <HiOutlineShoppingBag data-function="bag-modal" />
      </Link>
      <BagModal />
    </button>
  );
};

const NavTop = () => {
  return (
    <div className={css["nav-top"]}>
      <div></div>
      <TopPromo />
      <div className={css["user-actions-container"]}>
        <div className={css["emphasized"]}>
          <span>Need Help ?</span>
        </div>
        <div style={{ display: "flex", alignItems: "end" }}>
          <span>
            <img
              alt="country-flag"
              src="imgs/united-states-flag-icon.svg"
              className={css["country-flag"]}
            />
          </span>
          <span>US</span>
          <span style={{ display: "flex", marginLeft: "0.5rem" }}>
            <BiSolidDownArrow />
          </span>
        </div>
        <div>
          <span>English</span>
        </div>
        <div className={css["emphasized"]}>
          <span>Register </span>|<span> Log In</span>
        </div>
      </div>
    </div>
  );
};

const Cat = ({ data, setCatHovered }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.addEventListener("mouseover", (e) => {
      setCatHovered(e.currentTarget.getAttribute("cat-id"));
    });
  }, []);

  return (
    <li cat-id={data.replaceAll(" ", "").toLowerCase()} ref={ref}>
      <Link href={`/c/mens`}>
        <span>{data}</span>
      </Link>
    </li>
  );
};

const CatNav = ({ setCatHovered }) => {
  return (
    <>
      <div className={css["cat-nav-wrapper"]}>
        <nav data-function="cat-nav-modal">
          <ul className={css["cats"]}>
            {CAT_DATA.map((data, i) => {
              return <Cat key={i} data={data} setCatHovered={setCatHovered} />;
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

const NavBottom = ({
  handleOpenSearchSideBar,
  setSearchTerm,
  isSearchSideBarOpen,
  setCatHovered,
  handleCloseSearchSideBar,
}) => {
  return (
    <div className={css["nav-bottom"]}>
      <div className={css["nav-brand"]} data-function="cat-nav-modal-close">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <CatNav setCatHovered={setCatHovered} />
      <div className={css["right-box"]} data-function="cat-nav-modal-close">
        <div className={css["search-box"]}>
          <div className={css["search-box-wrapper"]}>
            <input
              type="text"
              name="a"
              id="a"
              placeholder="Search UA"
              onChange={(e) => {
                if (e.target.value.length > 2) {
                  setSearchTerm(e.target.value);
                  handleOpenSearchSideBar(true);
                } else {
                  handleCloseSearchSideBar();
                }
              }}
            />
            <div className={css["nav-button"]} style={{ position: "relative" }}>
              <AiOutlineSearch />
              {isSearchSideBarOpen ? (
                <XButtonComponent
                  onClick={() => handleCloseSearchSideBar()}
                  extra={{ backgroundColor: "white", right: "3rem" }}
                />
              ) : null}
            </div>
          </div>
        </div>
        <button className={css["nav-button"]}>
          <PiHeart />
        </button>
        <div className={css["shopping-cart"]}>
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
