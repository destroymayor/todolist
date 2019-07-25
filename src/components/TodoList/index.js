import React, { useEffect, useReducer } from "react";
import "components/TodoList/index.css";
import { List } from "antd";

import doToListReducer from "components/TodoList/reducer";
import TodoFrom from "components/TodoForm";
import TodoItem from "components/TodoItem";

const data = [
  { title: "項目1", content: "內容1內容1內容1內容1內容2", date: "2019-07-16", done: false },
  { title: "項目2", content: "內容2", date: "2019-07-16", done: true }
];

const TodoList = () => {
  const localStorageTodoListData = JSON.parse(localStorage.getItem("todo"));
  const [todo, dispatch] = useReducer(doToListReducer, { todoList: localStorageTodoListData || data });

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo.todoList));
  }, [todo.todoList]);

  return (
    <>
      <TodoFrom todoItemValue={item => dispatch({ type: "ADD_ITEM", addTodoListItem: item })} />
      <List
        bordered
        locale={{ emptyText: "目前無代辦事項" }}
        dataSource={todo.todoList}
        renderItem={(item, index) => (
          <TodoItem
            todoDoneState={item.done}
            markTodoDone={() => dispatch({ type: "DONE_ITEM", doneItem: index })}
            removeTodoItem={() => dispatch({ type: "REMOVE_ITEM", removeItem: index })}
            editTodoItemText={item => dispatch({ type: "EDIT_ITEM", editIndex: index, editItem: item })}
            todoItemDataSource={item}
            key={index}
          />
        )}
      />
    </>
  );
};

export default TodoList;
