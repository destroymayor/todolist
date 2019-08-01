import React, { useEffect, useContext } from "react";
import "components/index.css";

import { TodoListProvider } from "hooks/useContextTodoList";
import { DarkModeContext } from "hooks/useContextTheme";

import TodoList from "components/TodoList";
import ThemeToggle from "components/utils/ThemeToggle";
import TodoListButton from "components/utils/TodoListButton";

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
        <h2 className={themeFont}>React TodoList</h2>
        <div>
          <TodoListButton
            ghost={true}
            classNames={`github-link`}
            href={"https://github.com/destroymayor/todolist"}
            icon="github"
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
