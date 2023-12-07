import BagContextProvider from "./bag.context";
import LoadingContextProvider from "./loading.context";
import NavContextProvider from "./nav.context";
import SideBarContextProvider from "./sideBar.context";
import { SEARCH_DATA } from "@/server-data/server-data";

const EssentialContextsProvider = (props) => {
  return (
    <LoadingContextProvider>
      <BagContextProvider bag={props.bag}>
        <SideBarContextProvider SEARCH_DATA={props.SEARCH_DATA}>
          <NavContextProvider>{props.children}</NavContextProvider>
        </SideBarContextProvider>
      </BagContextProvider>
    </LoadingContextProvider>
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
