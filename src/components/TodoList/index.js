import React, { useReducer } from "react";
import "./index.css";
import { List } from "antd";

import doToListReducer from "./reducer";
import TodoItem from "../TodoItem";
import TodoFrom from "../TodoForm";

const data = [
  { title: "項目1", content: "內容1內容1內容1內容1內容2", date: "2019-07-16", done: false },
  { title: "項目2", content: "內容2", date: "2019-07-16", done: true }
];

const TodoList = () => {
  const [todo, dispatch] = useReducer(doToListReducer, { todoList: data });

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
