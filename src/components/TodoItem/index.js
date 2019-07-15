import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { Button, List, Input, Tooltip } from "antd";

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
    <List.Item className="todoList-li">
      <div className={todoDoneState ? "todoList-done" : undefined}>
        {editState ? (
          <div className="todoList-li-item">
            <Tooltip title="標示為完成" placement="bottom">
              <Button className="todoList-ctrl" onClick={markTodoDone} icon="check" />
            </Tooltip>
            <span className="todoList-item-text">{item}</span>
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

      {!todoDoneState && (
        <Tooltip title="編輯" placement="bottom">
          <Button className="todoList-ctrl" onClick={editTodoItem} icon={editState ? "edit" : "check"} />
        </Tooltip>
      )}
      <Tooltip title="刪除" placement="bottom">
        <Button className="todoList-ctrl" onClick={removeTodoItem} icon="delete" />
      </Tooltip>
    </List.Item>
  );
}

export default TodoItem;
