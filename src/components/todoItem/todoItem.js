import React, { useState, useEffect, useContext } from "react";
import "components/todoItem/todoItem.scss";

//component
import { List, Tooltip } from "antd";
import TodoListButton from "components/utils/todoListButton";
import ItemContent from "components/todoItem/todoItem-itemContent";
import EditItem from "components/todoItem/todoItem-editItem";

// global props
import { ReducerContext } from "store";

export default React.memo(props => {
  const [editState, setEditState] = useState(true);
  const [editTodo, setEditTodo] = useState({ title: "", content: "", date: "", done: false });

  const [state] = useContext(ReducerContext);
  const themeBg = `${state.theme.darkMode ? "dark-todoItem" : "light-todoItem"}`;

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
          classnames={"todoList-item-ctrl"}
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
          <Tooltip title={state.i18n.translate("item_edit_item_tooltip")} placement="bottom">
            <TodoListButton ghost={true} classnames={`todoList-item-ctrl`} onClick={editTodoItem} icon={"edit"} />
          </Tooltip>
        )}
        <Tooltip title={state.i18n.translate("item_remove_tooltip")} placement="bottom">
          <TodoListButton ghost={true} classnames={`todoList-item-ctrl`} onClick={props.removeTodoItem} icon="delete" />
        </Tooltip>
      </div>
    </List.Item>
  );
});
