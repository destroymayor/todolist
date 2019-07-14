import React, { useReducer } from "react";
import "./index.css";

import doToListReducer from "../../reducer/doToListReducer";

import TodoItem from "../TodoItem/index";
import TodoFrom from "../TodoForm/index";

function TodoList() {
  const [todo, dispatch] = useReducer(doToListReducer, {
    todoList: [
      { value: "項目1項目1項目1項目1項目1項目1項目1項目1項目1項目1項目1項目1項目1", done: true },
      { value: "項目2", done: false }
    ]
  });

  return (
    <div className="todoList">
      <h1>React TodoList</h1>
      <TodoFrom todoItemValue={value => dispatch({ type: "ADD_ITEM", addItem: value })} />
      <ul className="list-group todoList-component">
        {todo.todoList.map((item, index) => (
          <TodoItem
            todoDoneState={item.done}
            markTodoDone={() => dispatch({ type: "DONE_ITEM", doneItem: index })}
            removeTodoItem={() => dispatch({ type: "REMOVE_ITEM", removeItem: index })}
            editTodoItemText={value => dispatch({ type: "EDIT_ITEM", editIndex: index, editItem: value })}
            item={item.value}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
