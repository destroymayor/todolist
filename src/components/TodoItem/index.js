import React, { useState, useReducer } from "react";
import "./index.css";
import locale from "antd/lib/date-picker/locale/zh_TW";

import moment from "moment";
import { Button, DatePicker, List, Icon, Input, Tooltip } from "antd";

import editListReducer from "./reducer";

function TodoItem({ todoItemDataSource, todoDoneState, editTodoItemText, markTodoDone, removeTodoItem }) {
  const [editState, setEditState] = useState(true);

  const [todo, dispatchTodoItem] = useReducer(editListReducer, { todoItem: todoItemDataSource });

  const editTodoItem = () => {
    setEditState(!editState);
    editTodoItemText(todo.todoItem);
  };

  return (
    <List.Item className="todoItem">
      <div className="todoList-item">
        {editState && (
          <Button
            className="todoList-item-ctrl"
            style={{ color: todoItemDataSource.done ? "#1a73e8" : "#aaaaaa" }}
            onClick={markTodoDone}
            icon={"check"}
          />
        )}
        <div className={todoDoneState ? "todoList-done" : undefined}>
          {editState ? (
            <div className={`todoList-item-text`}>
              <div className={`todoList-item-text-title`}>{todoItemDataSource.title}</div>
              <div className="todoList-item-text-content">{todoItemDataSource.content}</div>
              {todoItemDataSource.date !== "" && (
                <div className="todoList-item-text-date">
                  <Icon style={{ color: "#1a73e8" }} type="calendar" />
                  <span>{todoItemDataSource.date}</span>
                </div>
              )}
            </div>
          ) : (
            <div className="todoList-item-edit">
              <Input
                className="todoList-item-edit-component"
                value={todo.todoItem.title}
                placeholder="輸入標題"
                onChange={e => dispatchTodoItem({ type: "EDIT_TITLE", todoList_title: e.target.value })}
              />
              <Input
                className="todoList-item-edit-component"
                value={todo.todoItem.content}
                placeholder="輸入詳細內容"
                onChange={e => dispatchTodoItem({ type: "EDIT_CONTENT", todoList_content: e.target.value })}
              />
              <DatePicker
                className="todoList-item-edit-component"
                locale={locale}
                format="YYYY-MM-DD"
                placeholder="新增日期/時間"
                defaultValue={todo.todoItem.date !== "" && moment(todo.todoItem.date, "YYYY-MM-DD")}
                onChange={(value, dateString) => dispatchTodoItem({ type: "EDIT_DATE", todoList_date: dateString })}
              />
            </div>
          )}
        </div>
      </div>

      {/* ctrl */}
      <div className="todoList-ctrl">
        <Tooltip title="編輯詳細資訊" placement="bottom">
          <Button className="todoList-item-ctrl" onClick={editTodoItem} icon={editState ? "form" : "check"} />
        </Tooltip>
        <Tooltip title="刪除" placement="bottom">
          <Button className="todoList-item-ctrl" onClick={removeTodoItem} icon="delete" />
        </Tooltip>
      </div>
    </List.Item>
  );
}

export default TodoItem;
