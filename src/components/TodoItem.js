import React from "react";

function TodoItem({ item, removeItem }) {
  return (
    <li>
      {item}
      <button type="button" onClick={removeItem}>
        X
      </button>
    </li>
  );
}

export default TodoItem;
