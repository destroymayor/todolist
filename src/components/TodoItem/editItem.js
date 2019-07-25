import React from "react";

import TodoListDatePicker from "components/utils/TodoListDatePicker";
import { TodoListInput, TodoListTextArea } from "components/utils/TodoListInput";

const EditItem = ({ todoItemDataSource, editTitle, editContent, editDate }) => {
  return (
    <div className={`todoList-item-edit`}>
      <TodoListInput
        classNames={`todoList-item-edit-component`}
        value={todoItemDataSource.title}
        placeholder="輸入標題"
        onChange={e => editTitle(e.target.value)}
      />
      <TodoListTextArea
        classNames={`todoList-item-edit-component`}
        value={todoItemDataSource.content}
        placeholder="輸入詳細內容"
        onChange={e => editContent(e.target.value)}
      />
      <TodoListDatePicker
        value={todoItemDataSource.date === "" ? undefined : todoItemDataSource.date}
        onChange={dateString => editDate(dateString)}
      />
    </div>
  );
};

export default EditItem;
