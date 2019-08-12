import React, { useState, useReducer, useContext, useRef, useCallback } from "react";
import "components/todoForm/todoForm.scss";

//components
import TodoListDatePicker from "components/utils/todoListDatePicker";
import { TodoListInput, TodoListTextArea } from "components/utils/todoListInput";
import TodoListButton from "components/utils/todoListButton";
import TodoFormEditItem from "components/todoForm/todoForm-editItem";

// reducer
import inputTodoReducer from "components/todoForm/reducer";
import { TodoListContext } from "hooks/useContextTodoList";

export default props => {
  const [todoEditState, setTodoEditState] = useState(false);

  const { todo, todoListDispatch } = useContext(TodoListContext);
  const [todoFormData, dispatchTodoInput] = useReducer(inputTodoReducer, {
    todoInput: { title: "", content: "", date: "", done: false }
  });
  const inputRef = useRef();

  const OnSubmit = useCallback(
    e => {
      e.preventDefault();
      if (!todoFormData.todoInput) return;

      props.todoItemValue(todoFormData.todoInput);
      inputRef.current.focus();
      dispatchTodoInput({ type: "INPUT_CLEAR" });
    },
    [todoFormData.todoInput, props]
  );

  return (
    <>
      {todoEditState ? (
        <form className="todoList-form" onSubmit={OnSubmit}>
          <div className="todoList-form-item">
            <TodoListButton ghost={true} classNames="todoForm-closeBtn" icon="close" onClick={() => setTodoEditState(false)} />
          </div>
          <div className="todoList-form-item">
            <TodoListInput
              classNames="todoList-input"
              refs={inputRef}
              onChange={e => dispatchTodoInput({ type: "INPUT_TITLE", inputTitle: e.target.value })}
              value={todoFormData.todoInput.title}
              placeholder="輸入標題"
            />
            <TodoListTextArea
              rows={4}
              placeholder="輸入詳細內容"
              onChange={e => dispatchTodoInput({ type: "INPUT_CONTENT", inputContent: e.target.value })}
              value={todoFormData.todoInput.content}
            />
            <TodoListDatePicker
              value={todoFormData.todoInput.date !== "" ? todoFormData.todoInput.date : undefined}
              onChange={dateString => dispatchTodoInput({ type: "INPUT_DATE", inputDate: dateString })}
            />
            <TodoListButton
              ghost={false}
              htmlType="submit"
              disabled={todoFormData.todoInput.title !== "" ? false : true}
              classNames="todoForm-addBtn"
              icon="plus">
              新增工作
            </TodoListButton>
          </div>
        </form>
      ) : (
        <TodoFormEditItem
          TodoListAddOnClick={() => setTodoEditState(true)}
          TodoListSortOnClick={() => todoListDispatch({ type: "SORT_ITEM_BY_DATE" })}
          sortStateIcon={todo.option.SortState ? "sort-descending" : "sort-ascending"}
        />
      )}
    </>
  );
};
