import React from "react";

function TodoItem({ item, todoClass, markTodoDone, removeTodoItem }) {
  return (
    <li className="list-group-item todoList-item">
      <div className={todoClass ? "todoList-done" : undefined}>
        <span className="todoList-item-doneBtn" onClick={markTodoDone}>
          &radic;
        </span>
        {item}
      </div>
      <button className="close todoList-item-removeBtn" type="button" onClick={removeTodoItem}>
        &times;
      </button>
    </li>
  );
}

export default TodoItem;
