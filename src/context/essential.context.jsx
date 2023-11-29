import BagContextProvider from "./bag.context";
import NavContextProvider from "./nav.context";
import SideBarContextProvider from "./sideBar.context";
import { SEARCH_DATA } from "@/server-data/server-data";

const EssentialContextsProvider = (props) => {
  return (
    <BagContextProvider bag={props.bag}>
      <SideBarContextProvider SEARCH_DATA={props.SEARCH_DATA}>
        <NavContextProvider>{props.children}</NavContextProvider>
      </SideBarContextProvider>
    </BagContextProvider>
  );
};

export const getEssentialServerSideProps = (ctx) => {
  const bag = ctx.req.cookies.bag;
  return {
    bag: bag || "[]",
    SEARCH_DATA,
  };
};

export default EssentialContextsProvider;
