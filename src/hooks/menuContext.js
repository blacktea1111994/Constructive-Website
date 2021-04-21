import React, { useState, useContext } from "react";

export const MenuContext = React.createContext();
export const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default function useMenuContext() {
  const menuContext = useContext(MenuContext);
  return menuContext;
}
