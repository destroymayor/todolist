import React, { useContext } from "react";
import "./index.css";

import DarkModeContext from "./hooks/useContextWrapper/DarkModeContext";
import TodoList from "./TodoList";
import ThemeModeSwitch from "./themeModeSwitch";

function App() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const themeBg = `${darkMode ? "light" : "dark"}`;
  const themeFont = `${darkMode ? "light-font" : "dark-font"}`;

  return (
    <div className={themeBg}>
      <div className="App">
        <header className="App-header">
          <h2 className={themeFont}>React TodoList</h2>
          <ThemeModeSwitch onChange={() => toggleDarkMode()} />
        </header>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
