import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import locale from "antd/lib/date-picker/locale/zh_TW";
import { Button, DatePicker, Input } from "antd";

function TodoForm({ todoItemValue }) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const OnSubmit = e => {
    e.preventDefault();
    if (!inputValue) return;

    todoItemValue(inputValue);
    setInputValue("");
    inputRef.current.focus();
  };

  const handleDatePicker = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };

  return (
    <form className="todoList-form" onSubmit={OnSubmit}>
      <div className="todoList-form-item">
        <Input
          className="todoList-input"
          ref={inputRef}
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
          type="text"
          placeholder="輸入新項目"
        />
        <DatePicker
          showTime
          locale={locale}
          format="YYYY-MM-DD HH:mm:ss"
          placeholder="新增日期/時間"
          onChange={handleDatePicker}
        />
      </div>
      <Button htmlType="submit" type="primary" className="todoList-AddBtn" icon="plus">
        新增工作
      </Button>
    </form>
  );
}

export default TodoForm;
