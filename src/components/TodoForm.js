import React, { useState, useEffect, useRef } from "react";

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
    document.getElementById("todoValue").value = "";
    setInputValue("");
    inputRef.current.focus();
  };

  return (
    <form className="todoList-form" onSubmit={OnSubmit}>
      <input
        className="todoList-input"
        ref={inputRef}
        onChange={e => setInputValue(e.target.value)}
        type="text"
        id="todoValue"
        placeholder="輸入新項目"
      />
      <button type="submit" className="btn btn-primary todoList-AddBtn">
        新增工作
      </button>
    </form>
  );
}

export default TodoForm;
