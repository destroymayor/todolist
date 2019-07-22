import React, { useReducer, useRef, useContext } from "react";
import "./index.css";

import { Button, Input } from "antd";
import { DarkModeContext } from "../hooks/useContextWrapper";
import inputTodoReducer from "./reducer";
import TodoListDatePicker from "../utils/TodoListDatePicker";
const { TextArea } = Input;

const TodoForm = ({ todoItemValue }) => {
  const { theme } = useContext(DarkModeContext);
  const themeMode = `${theme.darkMode ? "dark" : "light"}`;
  const themeFont = `${theme.darkMode ? "dark-font" : " light-font"}`;

  const [todo, dispatchTodoInput] = useReducer(inputTodoReducer, { todoInput: { title: "", content: "", date: "" } });
  const inputRef = useRef();

  const OnSubmit = e => {
    e.preventDefault();
    if (!todo.todoInput) return;

    todoItemValue(todo.todoInput);
    inputRef.current.focus();
    dispatchTodoInput({ type: "INPUT_CLEAR" });
  };

  return (
    <form className="todoList-form" onSubmit={OnSubmit}>
      <div className="todoList-form-item">
        <Input
          className={`todoList-input ${themeMode} ${themeFont}`}
          ref={inputRef}
          onChange={e => {
            dispatchTodoInput({ type: "INPUT_TITLE", inputTitle: e.target.value });
          }}
          value={todo.todoInput.title}
          placeholder="輸入標題"
        />
        <TextArea
          className={`${themeMode} ${themeFont}`}
          rows={4}
          placeholder="輸入詳細內容"
          onChange={e => {
            dispatchTodoInput({ type: "INPUT_CONTENT", inputContent: e.target.value });
          }}
          value={todo.todoInput.content}
        />
        <TodoListDatePicker
          theme={`${theme.darkMode ? "todoList-form-item-date-dark" : "todoList-form-item-date-light"}`}
          defaultValue={undefined}
          onChange={dateString => dispatchTodoInput({ type: "INPUT_DATE", inputDate: dateString })}
        />
      </div>
      <Button
        htmlType="submit"
        type="primary"
        disabled={todo.todoInput.title !== "" ? false : true}
        className="todoList-AddBtn"
        icon="plus">
        新增工作
      </Button>
    </form>
  );
};

export default TodoForm;
