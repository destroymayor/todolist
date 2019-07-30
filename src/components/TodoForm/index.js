import React, { useReducer, useRef } from "react";
import "components/TodoForm/index.css";

//components
import { Button } from "antd";
import TodoListDatePicker from "components/utils/TodoListDatePicker";
import { TodoListInput, TodoListTextArea } from "components/utils/TodoListInput";

// reducer
import inputTodoReducer from "components/TodoForm/reducer";

export default ({ todoItemValue }) => {
  const [todo, dispatchTodoInput] = useReducer(inputTodoReducer, {
    todoInput: { title: "", content: "", date: "", done: false }
  });
  const inputRef = useRef();

  const OnSubmit = e => {
    e.preventDefault();
    if (!todo.todoInput) return;

    todoItemValue(todo.todoInput);
    inputRef.current.focus();
    dispatchTodoInput({ type: "INPUT_CLEAR" });
  };

  return (
    <form className="todoList-form" onSubmit={OnSubmit}>
      <div className="todoList-form-item">
        <TodoListInput
          classNames={`todoList-input`}
          refs={inputRef}
          onChange={e => dispatchTodoInput({ type: "INPUT_TITLE", inputTitle: e.target.value })}
          value={todo.todoInput.title}
          placeholder="輸入標題"
        />
        <TodoListTextArea
          rows={4}
          placeholder="輸入詳細內容"
          onChange={e => dispatchTodoInput({ type: "INPUT_CONTENT", inputContent: e.target.value })}
          value={todo.todoInput.content}
        />
        <TodoListDatePicker
          value={todo.todoInput.date !== "" ? todo.todoInput.date : undefined}
          onChange={dateString => dispatchTodoInput({ type: "INPUT_DATE", inputDate: dateString })}
        />
      </div>
      <Button
        htmlType="submit"
        type="primary"
        disabled={todo.todoInput.title !== "" ? false : true}
        className="todoList-AddBtn"
        icon="plus">
        新增工作
      </Button>
    </form>
  );
};
