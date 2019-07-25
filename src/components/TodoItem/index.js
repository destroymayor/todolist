import React, { useState, useReducer, useContext } from "react";
import "components/TodoItem/index.css";

import moment from "moment";
import { List, Tooltip } from "antd";
import TodoListButton from "components/utils/TodoListButton";
import EditItem from "components/TodoItem/editItem";

import { DarkModeContext } from "hooks/useContextWrapper";
import editListReducer from "components/TodoItem/reducer";

const TodoItem = ({ todoItemDataSource, todoDoneState, editTodoItemText, markTodoDone, removeTodoItem }) => {
  const { theme } = useContext(DarkModeContext);
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
          <TodoListButton
            ghost={true}
            classNames={"todoList-item-ctrl"}
            styles={{ color: todoItemDataSource.done ? "#1a73e8" : "#aaaaaa" }}
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
                  <TodoListButton
                    ghost={theme.darkMode ? true : false}
                    styles={{ color: DateIsAfter ? "#1a73e8" : "#d93025" }}
                    icon={"calendar"}>
                    <span className={themeFont}>{todoItemDataSource.date}</span>
                  </TodoListButton>
                )}
              </div>
            </div>
          ) : (
            <EditItem
              todoItemDataSource={todo.todoItem}
              editTitle={title => editTitle(title)}
              editContent={content => editContent(content)}
              editDate={date => editDate(date)}
            />
          )}
        </div>
      </div>

      {/* ctrl */}
      <div className="todoList-ctrl">
        <Tooltip title="編輯詳細資訊" placement="bottom">
          <TodoListButton
            ghost={true}
            classNames={`todoList-item-ctrl`}
            onClick={editTodoItem}
            icon={editState ? "edit" : "check"}
          />
        </Tooltip>
        <Tooltip title="刪除" placement="bottom">
          <TodoListButton ghost={true} classNames={`todoList-item-ctrl`} onClick={removeTodoItem} icon="delete" />
        </Tooltip>
      </div>
    </List.Item>
  );
};

export default TodoItem;
