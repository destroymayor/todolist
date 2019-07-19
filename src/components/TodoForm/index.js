import React, { useState, useRef, useContext } from "react";
import "./index.css";
import locale from "antd/lib/date-picker/locale/zh_TW";

import DarkModeContext from "../hooks/useContextWrapper/DarkModeContext";
import { Button, DatePicker, Input } from "antd";
const { TextArea } = Input;

function TodoForm({ todoItemValue }) {
  const { darkMode } = useContext(DarkModeContext);
  const themeMode = `${darkMode ? "light" : "dark"}`;
  const themeFont = `${darkMode ? "light-font" : " dark-font"}`;

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
        <DatePicker
          className={`${darkMode ? "todoList-form-item-date-light" : "todoList-form-item-date-dark"}`}
          locale={locale}
          format="YYYY-MM-DD"
          placeholder="新增日期/時間"
          onChange={(value, dateString) => setInputTodoListTitle(prevState => ({ ...prevState, date: dateString }))}
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
}

export default TodoForm;
