import React, { useState, useReducer, useContext } from "react";
import "./index.css";

import moment from "moment";
import { Button, List, Tooltip } from "antd";

import { DarkModeContext } from "../../hooks/useContextWrapper";
import editListReducer from "./reducer";

import TodoListDatePicker from "../utils/TodoListDatePicker";
import { TodoListInput, TodoListTextArea } from "../utils/TodoListInput";

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
            ghost={true}
            className={`todoList-item-ctrl ${themeBg}`}
            style={{ color: todoItemDataSource.done ? "#1a73e8" : "#aaaaaa" }}
            onClick={markTodoDone}
            icon={"check"}
          />
        )}
        <div className={`${todoDoneState ? "todoList-done" : ""} ${themeFont}`}>
          {editState ? (
            <div className={`todoList-item-text ${themeFont}`}>
              <div className="todoList-item-text-title">{todoItemDataSource.title}</div>
              <div className="todoList-item-text-content">{todoItemDataSource.content}</div>
              <div className="todoList-item-text-date">
                {todoItemDataSource.date !== "" && (
                  <Button
                    ghost={theme.darkMode ? true : false}
                    className={themeBg}
                    style={{ color: DateIsAfter ? "#1a73e8" : "#d93025" }}
                    icon={"calendar"}>
                    <span className={themeFont}>{todoItemDataSource.date}</span>
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <div className={`todoList-item-edit`}>
              <TodoListInput
                classNames={`todoList-item-edit-component`}
                value={todo.todoItem.title}
                placeholder="輸入標題"
                onChange={e => editTitle(e.target.value)}
              />
              <TodoListTextArea
                classNames={`todoList-item-edit-component`}
                value={todo.todoItem.content}
                placeholder="輸入詳細內容"
                onChange={e => editContent(e.target.value)}
              />
              <TodoListDatePicker value={todo.todoItem.date} onChange={dateString => editDate(dateString)} />
            </div>
          )}
        </div>
      </div>

      {/* ctrl */}
      <div className="todoList-ctrl">
        <Tooltip title="編輯詳細資訊" placement="bottom">
          <Button
            ghost={true}
            className={`todoList-item-ctrl ${themeBg} ${themeFont}`}
            onClick={editTodoItem}
            icon={editState ? "edit" : "check"}
          />
        </Tooltip>
        <Tooltip title="刪除" placement="bottom">
          <Button ghost={true} className={`todoList-item-ctrl ${themeBg} ${themeFont}`} onClick={removeTodoItem} icon="delete" />
        </Tooltip>
      </div>
    </List.Item>
  );
};

export default TodoItem;
