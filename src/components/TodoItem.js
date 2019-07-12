import React from "react";

function TodoItem({ item, removeItem }) {
  return (
    <li className="todoList-item">
      <div>{item}</div>
      <button className="todoList-item-removeBtn" type="button" onClick={removeItem}>
        X
      </button>
    </li>
  );
}

export default TodoItem;
