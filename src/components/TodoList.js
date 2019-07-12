import React, { useReducer } from "react";

import doToListReducer from "../reducer/doToListReducer";

import TodoListItem from "./TodoItem";
import TodoFrom from "./TodoForm";

function TodoList() {
  const [todo, dispatch] = useReducer(doToListReducer, { todoList: ["123", "456"] });

  return (
    <div className="todoList">
      <h1>TodoList</h1>
      <TodoFrom todoItemValue={value => dispatch({ type: "ADD_ITEM", addItem: value })} />
      <div className="todoList-component">
        {todo.todoList.map((item, index) => (
          <TodoListItem removeItem={() => dispatch({ type: "REMOVE_ITEM", removeItem: index })} item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
