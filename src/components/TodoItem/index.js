import React, { useState, useReducer, useContext } from "react";
import "./index.css";

import moment from "moment";
import { Button, List, Icon, Input, Tooltip } from "antd";

import TodoListDatePicker from "../utils/TodoListDatePicker";
import { DarkModeContext } from "../hooks/useContextWrapper";
import editListReducer from "./reducer";

const { TextArea } = Input;

const TodoItem = ({ todoItemDataSource, todoDoneState, editTodoItemText, markTodoDone, removeTodoItem }) => {
  const { theme } = useContext(DarkModeContext);
  const themeBg = `${theme.darkMode ? "dark" : "light"}`;
  const themeFont = `${theme.darkMode ? "dark-font" : "light-font"}`;

  const [editState, setEditState] = useState(true);

  const [todo, dispatchTodoItem] = useReducer(editListReducer, { todoItem: todoItemDataSource });
  const editTitle = title => dispatchTodoItem({ type: "EDIT_TITLE", todoList_title: title });
  const editContent = content => dispatchTodoItem({ type: "EDIT_CONTENT", todoList_content: content });
  const editDate = date => dispatchTodoItem({ type: "EDIT_DATE", todoList_date: date });

  const editTodoItem = () => {
    setEditState(!editState);
    editTodoItemText(todo.todoItem);
  };

  const DateIsAfter = moment(todoItemDataSource.date).isAfter(moment().format("YYYY-MM-DD"));

  return (
    <List.Item className="todoItem">
      <div className="todoList-item">
        {editState && (
          <Button
            className={`todoList-item-ctrl ${themeBg}`}
            style={{ color: todoItemDataSource.done ? "#1a73e8" : "#aaaaaa" }}
            onClick={markTodoDone}
            icon={"check"}
          />
        )}
        <div className={`${todoDoneState ? "todoList-done" : ""} ${themeFont}`}>
          {editState ? (
            <div className={`todoList-item-text`}>
              <div className={`todoList-item-text-title ${themeFont}`}>{todoItemDataSource.title}</div>
              <div className={`todoList-item-text-content ${themeFont}`}>{todoItemDataSource.content}</div>
              <div className={`todoList-item-text-date`}>
                {todoItemDataSource.date !== "" && (
                  <div>
                    <Icon style={{ color: DateIsAfter ? "#1a73e8" : "#d93025" }} type="calendar" />
                    <span className={themeFont}>{todoItemDataSource.date}</span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className={"todoList-item-edit"}>
              <Input
                className={`todoList-item-edit-component ${themeBg} ${themeFont}`}
                value={todo.todoItem.title}
                placeholder="輸入標題"
                onChange={e => editTitle(e.target.value)}
              />
              <TextArea
                className={`todoList-item-edit-component ${themeBg} ${themeFont}`}
                value={todo.todoItem.content}
                placeholder="輸入詳細內容"
                onChange={e => editContent(e.target.value)}
              />
              <TodoListDatePicker
                theme={`${theme.darkMode ? "todoList-form-item-date-dark" : "todoList-form-item-date-light"}`}
                format="YYYY-MM-DD"
                placeholder="新增日期/時間"
                defaultValue={todo.todoItem.date}
                onChange={dateString => editDate(dateString)}
              />
            </div>
          )}
        </div>
      </div>

      {/* ctrl */}
      <div className="todoList-ctrl">
        <Tooltip title="編輯詳細資訊" placement="bottom">
          <Button
            className={`todoList-item-ctrl ${themeBg} ${themeFont}`}
            onClick={editTodoItem}
            icon={editState ? "form" : "check"}
          />
        </Tooltip>
        <Tooltip title="刪除" placement="bottom">
          <Button className={`todoList-item-ctrl ${themeBg} ${themeFont}`} onClick={removeTodoItem} icon="delete" />
        </Tooltip>
      </div>
    </List.Item>
  );
};

export default TodoItem;
