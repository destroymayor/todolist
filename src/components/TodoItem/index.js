import React, { useState, useEffect, useRef } from "react";
import "./index.css";

function TodoItem({ item, todoDoneState, editTodoItemText, markTodoDone, removeTodoItem }) {
  const [editState, setEditState] = useState(true);
  const [editValue, setEditValue] = useState("");
  const todoInputRef = useRef();

  useEffect(() => {
    setEditValue(item);
    if (!editState) {
      todoInputRef.current.focus();
    }
  }, [editState, item]);

  const editTodoItem = () => {
    setEditState(!editState);
    editTodoItemText(editValue);
  };

  return (
    <li className="list-group-item todoList-li">
      <div className={todoDoneState ? "todoList-done" : undefined}>
        {editState ? (
          <div className="todoList-li-item">
            <span className="todoList-ctrl" onClick={markTodoDone}>
              <ion-icon name={todoDoneState ? "done-all" : "checkmark"} />
            </span>
            <span className="todoList-item-text">{item}</span>
          </div>
        ) : (
          <input ref={todoInputRef} value={item} onChange={e => setEditValue(e.target.value)} className="todoList-item-input" />
        )}
      </div>
      {!todoDoneState && (
        <span onClick={editTodoItem} className="todoList-ctrl todoList-item-editBtn">
          <ion-icon name={editState ? "create" : "checkmark"} />
        </span>
      )}
      <span onClick={removeTodoItem} className="todoList-ctrl">
        <ion-icon name="close" />
      </span>
    </li>
  );
}

export default TodoItem;
