import React, { useState, useRef } from "react";
import "./index.css";
import locale from "antd/lib/date-picker/locale/zh_TW";

import { Button, DatePicker, Input } from "antd";

const { TextArea } = Input;

function TodoForm({ todoItemValue }) {
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
          className="todoList-input"
          ref={inputRef}
          onChange={e => {
            const { value } = e.target;
            setInputTodoListTitle(prevState => ({ ...prevState, title: value }));
          }}
          value={inputTodoListTitle.title}
          placeholder="輸入標題"
        />
        <TextArea
          rows={4}
          placeholder="輸入詳細內容"
          onChange={e => {
            const { value } = e.target;
            setInputTodoListTitle(prevState => ({ ...prevState, content: value }));
          }}
          value={inputTodoListTitle.content}
        />
        <DatePicker
          showTime
          locale={locale}
          format="YYYY-MM-DD HH:mm:ss"
          placeholder="新增日期/時間"
          onChange={(value, dateString) => setInputTodoListTitle(prevState => ({ ...prevState, date: dateString }))}
        />
      </div>
      <Button htmlType="submit" type="primary" className="todoList-AddBtn" icon="plus">
        新增工作
      </Button>
    </form>
  );
}

export default TodoForm;
