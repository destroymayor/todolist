import React, { createContext, useEffect, useReducer } from "react";

const DarkModeContext = createContext({ darkMode: true });

const themeReducer = (state, action) => {
  switch (action.type) {
    case "DARK_MODE":
      return { ...state, darkMode: !state.darkMode };

    default:
      return state;
  }
};

const localState = JSON.parse(localStorage.getItem("theme"));

const UseContextTheme = ({ children }) => {
  const [theme, DarkModeDispatch] = useReducer(themeReducer, localState || true);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return <DarkModeContext.Provider value={{ theme, DarkModeDispatch }}>{children}</DarkModeContext.Provider>;
};

export { DarkModeContext, UseContextTheme };
