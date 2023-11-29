import { createContext, useState } from "react";
import { CAT_DATA, MENU_DATA } from "../data/data";

export const NavContext = createContext();

const NavContextProvider = ({ children }) => {
  const [catHovered, setCatHovered] = useState(false);

  return (
    <NavContext.Provider
      value={{
        catHovered,
        setCatHovered,
        MENU_DATA,
        CAT_DATA,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;
