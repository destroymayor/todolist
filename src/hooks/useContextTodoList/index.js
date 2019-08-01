import React, { createContext, useEffect, useReducer } from "react";

import todoListReducer from "hooks/useContextTodoList/todoListReducer";
const TodoListContext = createContext();

const data = {
  todoList: [
    { title: "項目1", content: "內容1內容1", date: "2019-07-16", done: false },
    { title: "項目2", content: "內容2", date: "2019-07-16", done: true }
  ]
};

const localStorageTodoListData = JSON.parse(localStorage.getItem("todoList"));

const TodoListProvider = ({ children }) => {
  const [todo, todoListDispatch] = useReducer(todoListReducer, localStorageTodoListData || data);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todo));
  }, [todo]);

  return <TodoListContext.Provider value={{ todo, todoListDispatch }}>{children}</TodoListContext.Provider>;
};

export { TodoListContext, TodoListProvider };
