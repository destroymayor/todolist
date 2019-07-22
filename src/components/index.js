import React, { useContext } from "react";
import "./index.css";

import DarkModeContext from "./hooks/useContextWrapper/DarkModeContext";
import TodoList from "./TodoList";
import ThemeModeSwitch from "./themeModeSwitch";

function App() {
  const { theme, DarkModeDispatch } = useContext(DarkModeContext);
  const themeBg = `${theme.darkMode ? "dark" : "light"}`;
  const themeFont = `${theme.darkMode ? "dark-font" : "light-font"}`;

  return (
    <div className={themeBg}>
      <div className="App">
        <header className="App-header">
          <h2 className={themeFont}>React TodoList</h2>
          <ThemeModeSwitch onChange={() => DarkModeDispatch({ type: "DARK_MODE" })} />
        </header>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
