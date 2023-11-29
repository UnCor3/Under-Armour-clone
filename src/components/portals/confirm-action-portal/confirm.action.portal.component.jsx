import { createIfDoesNotExist } from "@/helper/helper";
import { createPortal } from "react-dom";
import dynamic from "next/dynamic";

const ConfirmActionPortal = ({ children }) => {
  const portal = createIfDoesNotExist("div", "confirm-action");
  return createPortal(children, portal);
};

export default dynamic(() => Promise.resolve(ConfirmActionPortal), {
  ssr: false,
});
