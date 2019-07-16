import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { Button, List, Input, Tooltip } from "antd";

function TodoItem({ todoItemDataSource, todoDoneState, editTodoItemText, markTodoDone, removeTodoItem }) {
  const [editState, setEditState] = useState(true);
  const [editValue, setEditValue] = useState("");
  const todoInputRef = useRef();

  useEffect(() => {
    setEditValue(todoItemDataSource.title);
    if (!editState) {
      todoInputRef.current.focus();
    }
  }, [editState, todoItemDataSource.title]);

  const editTodoItem = () => {
    setEditState(!editState);
    editTodoItemText(editValue);
  };

  return (
    <List.Item className="todoList-li">
      <div className={todoDoneState ? "todoList-done" : undefined}>
        {editState ? (
          <div className="todoList-li-item">
            <Button className="todoList-ctrl" onClick={markTodoDone} icon="check" />
            <div className="todoList-li-item-text">
              <h3 className="todoList-item-text">{todoItemDataSource.title}</h3>
              <span className="todoList-item-text">{todoItemDataSource.content}</span>
              <span className="todoList-item-text">{todoItemDataSource.date}</span>
            </div>
          </div>
        ) : (
          <Input
            ref={todoInputRef}
            value={editValue}
            onChange={e => setEditValue(e.target.value)}
            className="todoList-item-input"
          />
        )}
      </div>

      <div>
        {!todoDoneState && (
          <Tooltip title="編輯詳細資訊" placement="bottom">
            <Button className="todoList-ctrl" onClick={editTodoItem} icon={editState ? "form" : "check"} />
          </Tooltip>
        )}
        <Tooltip title="刪除" placement="bottom">
          <Button className="todoList-ctrl" onClick={removeTodoItem} icon="delete" />
        </Tooltip>
      </div>
    </List.Item>
  );
}

export default TodoItem;
