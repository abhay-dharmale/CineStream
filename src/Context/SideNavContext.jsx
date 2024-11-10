// SideNavContext.js
import React, { createContext, useState, useContext } from "react";

// Create the context
const SideNavContext = createContext();

// Provider component
export const SideNavProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <SideNavContext.Provider value={{ isOpen, toggleSideNav }}>
      {children}
    </SideNavContext.Provider>
  );
};

// Custom hook to use the SideNav context
export const useSideNav = () => useContext(SideNavContext);
