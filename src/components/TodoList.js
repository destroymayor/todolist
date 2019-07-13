import React, { useReducer } from "react";

import doToListReducer from "../reducer/doToListReducer";

import TodoListItem from "./TodoItem";
import TodoFrom from "./TodoForm";

function TodoList() {
  const [todo, dispatch] = useReducer(doToListReducer, {
    todoList: [{ value: "123", done: true }, { value: "456", done: false }]
  });

  return (
    <div className="todoList">
      <h1>React TodoList</h1>
      <TodoFrom todoItemValue={value => dispatch({ type: "ADD_ITEM", addItem: value })} />
      <ul className="list-group todoList-component">
        {todo.todoList.map((item, index) => (
          <TodoListItem
            todoClass={item.done}
            markTodoDone={() => dispatch({ type: "DONE_ITEM", doneItem: index })}
            removeTodoItem={() => dispatch({ type: "REMOVE_ITEM", removeItem: index })}
            item={item.value}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
