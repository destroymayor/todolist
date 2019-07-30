import React, { useState, useEffect } from "react";
import "components/TodoItem/index.css";

import { List, Tooltip } from "antd";
import TodoListButton from "components/utils/TodoListButton";
import ItemContent from "components/TodoItem/ItemContent";
import EditItem from "components/TodoItem/editItem";

const TodoItem = ({ todoItemDataSource, todoDoneState, editTodoItemText, markTodoDone, removeTodoItem }) => {
  const [editState, setEditState] = useState(true);
  const [editTodo, setEditTodo] = useState({ title: "", content: "", date: "", done: false });

  useEffect(() => {
    setEditTodo(todoItemDataSource);
  }, [todoItemDataSource]);

  const editTodoItem = () => {
    setEditState(!editState);
    editTodoItemText(editTodo);
  };

  return (
    <List.Item className="todoItem">
      <div className="todoList-item">
        <TodoListButton
          ghost={true}
          classNames={"todoList-item-ctrl"}
          styles={{ color: todoItemDataSource.done ? "#1a73e8" : "#aaaaaa" }}
          onClick={editState ? markTodoDone : editTodoItem}
          icon={"check"}
        />
        {editState ? (
          <ItemContent todoDoneState={todoDoneState} todoItemDataSource={todoItemDataSource} />
        ) : (
          <EditItem
            todoItemDataSource={editTodo}
            editTitle={title => setEditTodo(prevState => ({ ...prevState, title }))}
            editContent={content => setEditTodo(prevState => ({ ...prevState, content }))}
            editDate={date => setEditTodo(prevState => ({ ...prevState, date }))}
          />
        )}
      </div>

      {/* ctrl */}
      <div className="todoList-ctrl">
        {editState && (
          <Tooltip title="編輯詳細資訊" placement="bottom">
            <TodoListButton ghost={true} classNames={`todoList-item-ctrl`} onClick={editTodoItem} icon={"edit"} />
          </Tooltip>
        )}
        <Tooltip title="刪除" placement="bottom">
          <TodoListButton ghost={true} classNames={`todoList-item-ctrl`} onClick={removeTodoItem} icon="delete" />
        </Tooltip>
      </div>
    </List.Item>
  );
};

export default TodoItem;
