import React, { createContext, useReducer } from "react";

const DarkModeContext = createContext({ darkMode: true });

const themeReducer = (state, action) => {
  switch (action.type) {
    case "DARK_MODE":
      return { ...state, darkMode: !state.darkMode };

    default:
      return state;
  }
};

const UseContextWrapper = ({ children }) => {
  const [theme, DarkModeDispatch] = useReducer(themeReducer, true);

  return <DarkModeContext.Provider value={{ theme, DarkModeDispatch }}>{children}</DarkModeContext.Provider>;
};

export { DarkModeContext, UseContextWrapper };
