import React, { useState, useContext } from "react";

import TodoListButton from "components/utils/todoListButton";

import { DarkModeContext } from "hooks/useContextTheme";
import moment from "moment";

export default ({ todoDoneState, todoItemDataSource }) => {
  const [dateEditState, setDateEditState] = useState(true);
  const { theme } = useContext(DarkModeContext);
  const themeFont = `${theme.darkMode ? "dark-font" : "light-font"}`;

  const DateIsAfter = moment(todoItemDataSource.date).isAfter(moment().format("YYYY-MM-DD"));
  const TodoItemMarkDone = `${todoDoneState ? "todoList-done" : ""} ${themeFont}`;

  return (
    <div className={`todoList-item-text ${themeFont} ${TodoItemMarkDone}`}>
      <div className="todoList-item-text-title">{todoItemDataSource.title}</div>
      <div className="todoList-item-text-content">{todoItemDataSource.content}</div>
      <div className="todoList-item-text-date">
        {todoItemDataSource.date !== "" && (
          <TodoListButton
            ghost={theme.darkMode ? true : false}
            styles={{ color: DateIsAfter ? "#1a73e8" : "#d93025" }}
            icon={"calendar"}
            onClick={() => setDateEditState(!dateEditState)}>
            <span className={`${themeFont} ${TodoItemMarkDone}`}>{todoItemDataSource.date}</span>
          </TodoListButton>
        )}
      </div>
    </div>
  );
};
