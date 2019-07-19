import React, { useState } from "react";

import DarkModeContext from "./DarkModeContext";

const useContextWrapper = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
};

export default useContextWrapper;
