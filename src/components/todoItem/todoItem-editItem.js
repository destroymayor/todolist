import React from "react";

import TodoListDatePicker from "components/utils/todoListDatePicker";
import { TodoListInput, TodoListTextArea } from "components/utils/todoListInput";

export default props => {
  return (
    <div>
      <TodoListInput
        className={`todoList-item-edit-component`}
        value={props.todoItemDataSource.title}
        onChange={e => props.editTitle(e.target.value)}
      />
      <TodoListTextArea
        className={`todoList-item-edit-component`}
        value={props.todoItemDataSource.content}
        onChange={e => props.editContent(e.target.value)}
      />
      <TodoListDatePicker
        value={props.todoItemDataSource.date === "" ? undefined : props.todoItemDataSource.date}
        onChange={dateString => props.editDate(dateString)}
      />
    </div>
  );
};
