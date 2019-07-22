import React, { useEffect, useContext } from "react";
import "./index.css";

import { DarkModeContext } from "./hooks/useContextWrapper";
import TodoList from "./TodoList";
import ThemeToggle from "./themeToggle";

function App() {
  const { theme, DarkModeDispatch } = useContext(DarkModeContext);
  const themeBg = `${theme.darkMode ? "dark" : "light"}`;
  const themeFont = `${theme.darkMode ? "dark-font" : "light-font"}`;

  useEffect(() => {
    document.getElementById("body").className = themeBg;
  }, [themeBg]);

  return (
    <div className={`App ${themeBg}`}>
      <header className="App-header">
        <h2 className={themeFont}>React TodoList</h2>
        <ThemeToggle onChange={() => DarkModeDispatch({ type: "DARK_MODE" })} />
      </header>
      <TodoList />
    </div>
  );
}

export default App;
