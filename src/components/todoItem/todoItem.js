import React, { useState, useEffect, useContext } from "react";
import "components/todoItem/todoItem.scss";

//component
import { List, Tooltip } from "antd";
import TodoListButton from "components/utils/todoListButton";
import ItemContent from "components/todoItem/todoItem-itemContent";
import EditItem from "components/todoItem/todoItem-editItem";

// global props
import { DarkModeContext } from "hooks/useContextTheme";

export default props => {
  const [editState, setEditState] = useState(true);
  const [editTodo, setEditTodo] = useState({ title: "", content: "", date: "", done: false });

  const { theme } = useContext(DarkModeContext);
  const themeBg = `${theme.darkMode ? "dark-todoItem" : "light-todoItem"}`;

  useEffect(() => {
    setEditTodo(props.todoItemDataSource);
  }, [props.todoItemDataSource]);

  const editTodoItem = () => {
    setEditState(!editState);
    props.editTodoItemText(editTodo);
  };

  return (
    <List.Item className={themeBg}>
      <div className="todoList-item">
        <TodoListButton
          ghost={true}
          classNames={"todoList-item-ctrl"}
          styles={{ color: props.todoItemDataSource.done ? "#1a73e8" : "#aaaaaa" }}
          onClick={editState ? props.markTodoDone : editTodoItem}
          icon={"check"}
        />
        {editState ? (
          <ItemContent
            todoDoneState={props.todoDoneState}
            todoItemDataSource={props.todoItemDataSource}
            editTodoItemDate={date => props.editTodoItemText({ ...props.todoItemDataSource, date })}
          />
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
          <TodoListButton ghost={true} classNames={`todoList-item-ctrl`} onClick={props.removeTodoItem} icon="delete" />
        </Tooltip>
      </div>
    </List.Item>
  );
};
