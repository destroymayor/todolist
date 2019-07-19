import React, { useContext } from "react";
import "./index.css";

import DarkModeContext from "./hooks/useContextWrapper/DarkModeContext";
import TodoList from "./TodoList";
import ThemeModeSwitch from "./themeModeSwitch";

function App() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div className={`${darkMode ? "light" : "dark"}`}>
      <div className="App">
        <header className="App-header">
          <h2 className={darkMode ? "light" : "dark"}>React TodoList</h2>
          <ThemeModeSwitch onChange={() => toggleDarkMode()} />
        </header>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
