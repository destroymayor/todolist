import React, { useEffect, useContext } from "react";
import "components/index.css";

import { TodoListProvider } from "hooks/useContextTodoList";
import { DarkModeContext } from "hooks/useContextTheme";

import TodoList from "components/todoList/todoList";
import ThemeToggle from "components/utils/themeToggle";

export default () => {
  const { theme, DarkModeDispatch } = useContext(DarkModeContext);
  const themeBg = `${theme.darkMode ? "dark" : "light"}`;
  const themeFont = `${theme.darkMode ? "dark-font" : "light-font"}`;

  useEffect(() => {
    document.getElementById("body").className = themeBg;
  }, [themeBg]);

  return (
    <div className={`App ${themeBg}`}>
      <header className="App-header">
        <h2 className={themeFont}>TodoList</h2>
        <div>
          <iframe
            title="github-todolist"
            src="https://ghbtns.com/github-btn.html?user=destroymayor&repo=todolist&type=star&count=true"
            frameborder="0"
            scrolling="0"
            width="170px"
            height="20px"
          />
          <ThemeToggle onChange={() => DarkModeDispatch({ type: "DARK_MODE" })} />
        </div>
      </header>
      <TodoListProvider>
        <TodoList />
      </TodoListProvider>
    </div>
  );
};
