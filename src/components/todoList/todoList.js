import React, { useEffect, useContext } from "react";
import { List } from "antd";

import TodoFrom from "components/todoForm/todoForm";
import TodoItem from "components/todoItem/todoItem";

import { ReducerContext } from "reducers";

export default () => {
  const [state, dispatch] = useContext(ReducerContext);

  useEffect(() => {
    localStorage.setItem("test", JSON.stringify(state.todo));
  }, [state.todo]);

  return (
    <>
      <TodoFrom todoItemValue={item => dispatch({ type: "ADD_ITEM", addTodoListItem: item })} />
      <List
        bordered
        locale={{ emptyText: "目前無代辦事項" }}
        dataSource={state.todo.todoList}
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
