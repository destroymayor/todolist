import React from "react";

import TodoListDatePicker from "components/utils/todoListDatePicker";
import { TodoListInput, TodoListTextArea } from "components/utils/todoListInput";

export default props => {
  return (
    <div>
      <TodoListInput
        classNames={`todoList-item-edit-component`}
        value={props.todoItemDataSource.title}
        placeholder="輸入標題"
        onChange={e => props.editTitle(e.target.value)}
      />
      <TodoListTextArea
        classNames={`todoList-item-edit-component`}
        value={props.todoItemDataSource.content}
        placeholder="輸入詳細內容"
        onChange={e => props.editContent(e.target.value)}
      />
      <TodoListDatePicker
        value={props.todoItemDataSource.date === "" ? undefined : props.todoItemDataSource.date}
        onChange={dateString => props.editDate(dateString)}
      />
    </div>
  );
};
