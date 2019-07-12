import React, { useReducer } from "react";
import TodoListItem from "./TodoItem";
import TodoFrom from "./TodoForm";

const doToListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, todoList: [...state.todoList, action.addItem] };
    case "REMOVE_ITEM":
      const newState = [...state.todoList];
      newState.splice(action.removeItem, 1);
      return { ...state, todoList: newState };
    default:
      throw new Error();
  }
};

function TodoList() {
  const [todo, dispatch] = useReducer(doToListReducer, { todoList: ["123", "456"] });

  return (
    <div>
      <h1>TodoList</h1>
      <TodoFrom todoItemValue={value => dispatch({ type: "ADD_ITEM", addItem: value })} />
      {todo.todoList.map((item, index) => (
        <TodoListItem removeItem={() => dispatch({ type: "REMOVE_ITEM", removeItem: index })} item={item} key={index} />
      ))}
    </div>
  );
}

export default TodoList;
