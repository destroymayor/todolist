import React, { useState, useContext } from "react";

import TodoListButton from "components/utils/todoListButton";
import TodoListDatePicker from "components/utils/todoListDatePicker";

import { DarkModeContext } from "hooks/useContextTheme";

import moment from "moment";

export default props => {
  const [dateEditState, setDateEditState] = useState(false);

  const { theme } = useContext(DarkModeContext);
  const themeFont = `${theme.darkMode ? "dark-font" : "light-font"}`;

  const DateIsAfter = moment(props.todoItemDataSource.date).isAfter(moment().format("YYYY-MM-DD"));
  const TodoItemMarkDone = `${props.todoDoneState ? "todoList-done" : ""} ${themeFont}`;

  return (
    <div className={`todoList-item-text ${themeFont} ${TodoItemMarkDone}`}>
      <div className="todoList-item-text-title">{props.todoItemDataSource.title}</div>
      <div className="todoList-item-text-content">{props.todoItemDataSource.content}</div>
      <div className="todoList-item-text-date">
        {props.todoItemDataSource.date !== "" && (
          <>
            {dateEditState ? (
              <TodoListDatePicker
                open={dateEditState}
                value={props.todoItemDataSource.date === "" ? undefined : props.todoItemDataSource.date}
                onChange={dateString => {
                  setDateEditState(!dateEditState);
                  props.editTodoItemDate(dateString);
                }}
              />
            ) : (
              <TodoListButton
                ghost={theme.darkMode ? true : false}
                styles={{ color: DateIsAfter ? "#1a73e8" : "#d93025" }}
                icon={"calendar"}
                onClick={() => setDateEditState(!dateEditState)}>
                <span className={`${themeFont} ${TodoItemMarkDone}`}>{props.todoItemDataSource.date}</span>
              </TodoListButton>
            )}
          </>
        )}
      </div>
    </div>
  );
};
