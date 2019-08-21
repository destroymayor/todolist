import React, { useEffect, useContext, useCallback } from "react";
import { List } from "antd";

import TodoFrom from "components/todoForm/todoForm";
import TodoItem from "components/todoItem/todoItem";

import { ReducerContext } from "reducers";

export default () => {
  const [state, dispatch] = useContext(ReducerContext);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(state.todo));
  }, [state.todo]);

  const handleAddItemClick = useCallback(item => dispatch({ type: "ADD_ITEM", addTodoListItem: item }), [dispatch]);
  const handleDoneItemClick = useCallback(index => dispatch({ type: "DONE_ITEM", doneItem: index }), [dispatch]);
  const handleRemoveItemClick = useCallback(index => dispatch({ type: "REMOVE_ITEM", removeItem: index }), [dispatch]);
  const handleEditItemClick = useCallback((index, item) => dispatch({ type: "EDIT_ITEM", editIndex: index, editItem: item }), [
    dispatch
  ]);

  return (
    <>
      <TodoFrom todoItemValue={item => handleAddItemClick(item)} />
      <List
        bordered
        locale={{ emptyText: "目前無代辦事項" }}
        dataSource={state.todo.todoList}
        renderItem={(item, index) => (
          <TodoItem
            todoDoneState={item.done}
            markTodoDone={() => handleDoneItemClick(index)}
            removeTodoItem={() => handleRemoveItemClick(index)}
            editTodoItemText={item => handleEditItemClick(index, item)}
            todoItemDataSource={item}
            key={index}
          />
        )}
      />
    </>
  );
};
