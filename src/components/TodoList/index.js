import React, { useContext } from "react";
import "components/TodoList/index.css";
import { List } from "antd";

import TodoFrom from "components/TodoForm";
import TodoItem from "components/TodoItem";

import { TodoListContext } from "hooks/useContextTodoList";

export default () => {
  const { todo, todoListDispatch } = useContext(TodoListContext);

  return (
    <>
      <TodoFrom todoItemValue={item => todoListDispatch({ type: "ADD_ITEM", addTodoListItem: item })} />
      <List
        bordered
        locale={{ emptyText: "目前無代辦事項" }}
        dataSource={todo.todoList}
        renderItem={(item, index) => (
          <TodoItem
            todoDoneState={item.done}
            markTodoDone={() => todoListDispatch({ type: "DONE_ITEM", doneItem: index })}
            removeTodoItem={() => todoListDispatch({ type: "REMOVE_ITEM", removeItem: index })}
            editTodoItemText={item => todoListDispatch({ type: "EDIT_ITEM", editIndex: index, editItem: item })}
            todoItemDataSource={item}
            key={index}
          />
        )}
      />
    </>
  );
};
