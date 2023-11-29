import { createContext, useState } from "react";

export const SideBarContext = createContext();

const SideBarContextProvider = ({ children, SEARCH_DATA }) => {
  const [isHamSideOpen, setIsHamSideBarOpen] = useState(false);
  const [isSearchSideBarOpen, setIsSearchSideBarOpen] = useState(false);
  const [isSubCategoriesHidden, setIsSubCategoriesHidden] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SideBarContext.Provider
      value={{
        isHamSideOpen,
        setIsHamSideBarOpen,
        isSubCategoriesHidden,
        setIsSubCategoriesHidden,
        isSearchSideBarOpen,
        setIsSearchSideBarOpen,
        searchTerm,
        setSearchTerm,
        SEARCH_DATA,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarContextProvider;
