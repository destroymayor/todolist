import React, { useState } from "react";

function TodoForm({ todoItemValue }) {
  const [inputValue, setInputValue] = useState("");

  const OnSubmit = e => {
    e.preventDefault();
    if (!inputValue) return;
    todoItemValue(inputValue);
    document.getElementById("todoValue").value = "";
  };

  return (
    <form onSubmit={OnSubmit}>
      <input onChange={e => setInputValue(e.target.value)} type="text" id="todoValue" placeholder="輸入新項目" />
      <button type="submit">新增</button>
    </form>
  );
}

export default TodoForm;
