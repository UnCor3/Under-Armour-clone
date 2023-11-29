import SubCategoryMobileComponent from "./subCategory.component";
import { SideBarContext } from "../../../context/sideBar.context";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { useContext, useRef, useState } from "react";
import { PiHeart, PiInfoThin } from "react-icons/pi";
import css from "./ham-sidebar.styles.module.css";
import { CiUser, CiMail } from "react-icons/ci";
import { subCats } from "../../../data/data";
import Link from "next/link";

const HamSideBar = () => {
  const [cat, setCat] = useState("");
  const {
    isHamSideOpen,
    setIsHamSideBarOpen,
    isSubCategoriesHidden,
    setIsSubCategoriesHidden,
  } = useContext(SideBarContext);

  const midRef = useRef();
  const backArrowRef = useRef();

  //Toggle back and forward
  if (midRef.current) {
    if (subCats[cat]) midRef.current.style.left = "-100%";
    else midRef.current.style.left = "0";
  }

  const handleCatClick = (e, cat) => {
    e.preventDefault();
    setCat(cat);
  };

  const handleGetBack = () => {
    midRef.current.style.left = "0";
    backArrowRef.current.style.visibility = "hidden";
    setCat("");
  };

  const handleModuleClose = () => {
    setIsHamSideBarOpen((prev) => !prev);
  };

  const getModuleStyle = () =>
    isHamSideOpen ? { left: 0 } : { left: "-100%" };

  const getNavStyle = () =>
    isSubCategoriesHidden ? { display: "flex" } : { display: "none" };

  return (
    <div className={css["module-wrapper"]} style={getModuleStyle()}>
      <div className={css["module-top"]}>
        <div
          ref={backArrowRef}
          onClick={handleGetBack}
          style={{ visibility: "hidden" }}
        >
          <SlArrowLeft />
        </div>
        <div>
          <Link href="/">
            <img alt="menu-logo" src="imgs/menulogo.svg" />
          </Link>
        </div>
        <div className={css["module-close"]} onClick={handleModuleClose}>
          <button></button>
        </div>
      </div>
      <div className={css["module-mid"]} ref={midRef} style={{ left: 0 }}>
        <div className={css["cats"]}>
          <div>
            <a href="#New" onClick={(e) => handleCatClick(e, "new")}>
              New{" "}
              <div className={css["cat-next"]}>
                <SlArrowRight />
              </div>
            </a>
          </div>
          <div>
            <a href="#Men" onClick={(e) => handleCatClick(e, "men")}>
              Men{" "}
              <div className={css["cat-next"]}>
                <SlArrowRight />
              </div>
            </a>
          </div>
          <div>
            <a href="#Women" onClick={(e) => handleCatClick(e, "women")}>
              Women{" "}
              <div className={css["cat-next"]}>
                <SlArrowRight />
              </div>
            </a>
          </div>
          <div>
            <a href="#Kids" onClick={(e) => handleCatClick(e, "kids")}>
              Kids{" "}
              <div className={css["cat-next"]}>
                <SlArrowRight />
              </div>
            </a>
          </div>
          <div>
            <a href="#Shoes" onClick={(e) => handleCatClick(e, "shoes")}>
              Shoes{" "}
              <div className={css["cat-next"]}>
                <SlArrowRight />
              </div>
            </a>
          </div>
          <div>
            <a
              href="#Back to School"
              onClick={(e) => handleCatClick(e, "backToSchool")}
            >
              Back to School{" "}
              <div className={css["cat-next"]}>
                <SlArrowRight />
              </div>
            </a>
          </div>
          <div>
            <a href="#Outlet" onClick={(e) => handleCatClick(e, "outlet")}>
              Outlet{" "}
              <div className={css["cat-next"]}>
                <SlArrowRight />
              </div>
            </a>
          </div>
          <div className={css["region"]}>
            <a>
              Region : US <div className={css["cat-next"]}></div>
            </a>
          </div>
        </div>
        {subCats[cat] ? (
          <SubCategoryMobileComponent
            cat={subCats[cat]}
            setIsSubCategoriesHidden={setIsSubCategoriesHidden}
            backArrowRef={backArrowRef}
          />
        ) : null}
      </div>
      <div className={css["auth"]} style={getNavStyle()}>
        <div>
          <CiUser /> <span>Log In</span>
        </div>
        <div>
          <CiMail /> <span>Register</span>
        </div>
        <div>
          <PiHeart /> <span>Saved</span>
        </div>
        <div>
          <PiInfoThin />
          <span>Help</span>
        </div>
      </div>
    </div>
  );
};

export default HamSideBar;
