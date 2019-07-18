import React from "react";
import "./index.css";

import TodoList from "./TodoList";
import ThemeModeSwitch from "./themeModeSwitch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>React TodoList</h2>
        <ThemeModeSwitch />
      </header>
      <TodoList />
    </div>
  );
}

export default App;
