import React, { useReducer } from "react";

import DarkModeContext from "./DarkModeContext";

const themeReducer = (state, action) => {
  switch (action.type) {
    case "DARK_MODE":
      return { ...state, darkMode: !state.darkMode };

    default:
      return state;
  }
};

const useContextWrapper = ({ children }) => {
  const [theme, DarkModeDispatch] = useReducer(themeReducer, true);

  return <DarkModeContext.Provider value={{ theme, DarkModeDispatch }}>{children}</DarkModeContext.Provider>;
};

export default useContextWrapper;
