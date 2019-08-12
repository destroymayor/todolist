import React, { createContext, useEffect, useReducer } from "react";

import todoListReducer from "hooks/useContextTodoList/todoListReducer";
const TodoListContext = createContext();

const data = {
  todoList: [],
  option: { SortState: true }
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
