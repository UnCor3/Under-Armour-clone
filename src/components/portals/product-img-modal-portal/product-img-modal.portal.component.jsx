import { createPortal } from "react-dom";
import css from "./product-img-modal.styles.module.css";
import { createIfDoesNotExist } from "@/helper/helper";
import dynamic from "next/dynamic";

const ImgPortal = ({ children }) => {
  const portal = createIfDoesNotExist("div", "product-review");
  portal.className = css["portal-container"];
  return createPortal(children, portal);
};

export default dynamic(() => Promise.resolve(ImgPortal), {
  ssr: false,
});
