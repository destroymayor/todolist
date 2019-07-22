import React, { useState, useRef, useContext } from "react";
import "./index.css";
import { Button, Input } from "antd";
import DarkModeContext from "../hooks/useContextWrapper/DarkModeContext";

import TodoListDatePicker from "../utils/TodoListDatePicker";
const { TextArea } = Input;

const TodoForm = ({ todoItemValue }) => {
  const { theme } = useContext(DarkModeContext);
  const themeMode = `${theme.darkMode ? "dark" : "light"}`;
  const themeFont = `${theme.darkMode ? "dark-font" : " light-font"}`;

  const [inputTodoListTitle, setInputTodoListTitle] = useState({ title: "", content: "", date: "" });
  const inputRef = useRef();

  const OnSubmit = e => {
    e.preventDefault();
    if (!inputTodoListTitle) return;

    todoItemValue(inputTodoListTitle);
    setInputTodoListTitle({ title: "", content: "", date: "" });
    inputRef.current.focus();
  };

  return (
    <form className="todoList-form" onSubmit={OnSubmit}>
      <div className="todoList-form-item">
        <Input
          className={`todoList-input ${themeMode} ${themeFont}`}
          ref={inputRef}
          onChange={e => {
            const { value } = e.target;
            setInputTodoListTitle(prevState => ({ ...prevState, title: value }));
          }}
          value={inputTodoListTitle.title}
          placeholder="輸入標題"
        />
        <TextArea
          className={`${themeMode} ${themeFont}`}
          rows={4}
          placeholder="輸入詳細內容"
          onChange={e => {
            const { value } = e.target;
            setInputTodoListTitle(prevState => ({ ...prevState, content: value }));
          }}
          value={inputTodoListTitle.content}
        />
        <TodoListDatePicker
          theme={theme.darkMode}
          defaultValue=""
          onChange={dateString => setInputTodoListTitle(prevState => ({ ...prevState, date: dateString }))}
        />
      </div>
      <Button
        htmlType="submit"
        type="primary"
        disabled={inputTodoListTitle.title !== "" ? false : true}
        className="todoList-AddBtn"
        icon="plus">
        新增工作
      </Button>
    </form>
  );
};

export default TodoForm;
