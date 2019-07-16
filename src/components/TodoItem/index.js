import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import locale from "antd/lib/date-picker/locale/zh_TW";
import { Button, DatePicker, List, Icon, Input, Tooltip } from "antd";

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
    <List.Item className="todoItem">
      <div className={todoDoneState ? "todoList-done" : undefined}>
        {editState ? (
          <div className="todoList-item">
            <Button
              className="todoList-item-ctrl"
              style={{ color: todoItemDataSource.done ? "#1a73e8" : "#aaa" }}
              onClick={markTodoDone}
              icon={"check"}
            />
            <div className="todoList-item-text">
              <div className="todoList-item-text-title">{todoItemDataSource.title}</div>
              <div className="todoList-item-text-content">{todoItemDataSource.content}</div>
              <div className="todoList-item-text-date">
                <Icon style={{ color: "#1a73e8" }} type="calendar" />
                <span>{todoItemDataSource.date}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="todoList-item-edit">
            <Input
              ref={todoInputRef}
              value={editValue}
              placeholder="輸入標題"
              onChange={e => setEditValue(e.target.value)}
              className="todoList-item-edit-component"
            />
            <Input
              ref={todoInputRef}
              value={editValue}
              placeholder="輸入詳細內容"
              onChange={e => setEditValue(e.target.value)}
              className="todoList-item-edit-component"
            />
            <DatePicker
              showTime
              locale={locale}
              format="YYYY-MM-DD HH:mm:ss"
              placeholder="新增日期/時間"
              onChange={(value, dateString) => {}}
              className="todoList-item-edit-component"
            />
          </div>
        )}
      </div>

      <div className="todoList-ctrl">
        {!todoDoneState && (
          <Tooltip title="編輯詳細資訊" placement="bottom">
            <Button className="todoList-item-ctrl" onClick={editTodoItem} icon={editState ? "form" : "check"} />
          </Tooltip>
        )}
        <Tooltip title="刪除" placement="bottom">
          <Button className="todoList-item-ctrl" onClick={removeTodoItem} icon="delete" />
        </Tooltip>
      </div>
    </List.Item>
  );
}

export default TodoItem;
