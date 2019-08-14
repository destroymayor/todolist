import React, { useEffect, useContext } from "react";
import "components/index.scss";

import { TodoListProvider } from "hooks/useContextTodoList";
import { DarkModeContext } from "hooks/useContextTheme";

import Header from "components/header/header";
import TodoList from "components/todoList/todoList";

export default () => {
  const { theme } = useContext(DarkModeContext);
  const themeBg = `${theme.darkMode ? "dark" : "light"}`;

  useEffect(() => {
    document.getElementById("body").className = themeBg;
  }, [themeBg]);

  return (
    <div className={`App ${themeBg}`}>
      <Header />
      <TodoListProvider>
        <TodoList />
      </TodoListProvider>
    </div>
  );
};
