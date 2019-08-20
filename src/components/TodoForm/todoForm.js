import React, { useState, useReducer, useContext, useRef, useCallback } from "react";
import "components/todoForm/todoForm.scss";

//components
import TodoListDatePicker from "components/utils/todoListDatePicker";
import { TodoListInput, TodoListTextArea } from "components/utils/todoListInput";
import TodoListButton from "components/utils/todoListButton";
import TodoFormEditItem from "components/todoForm/todoForm-editItem";

// reducer
import inputTodoReducer from "components/todoForm/reducer";
import { ReducerContext } from "reducers";

export default props => {
  const [todoEditState, setTodoEditState] = useState(false);

  const [state, dispatch] = useContext(ReducerContext);
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
            <TodoListButton ghost={true} classnames="todoForm-closeBtn" icon="close" onClick={() => setTodoEditState(false)} />
          </div>
          <div className="todoList-form-item">
            <TodoListInput
              className="todoList-input"
              refs={inputRef}
              onChange={e => dispatchTodoInput({ type: "INPUT_TITLE", inputTitle: e.target.value })}
              value={todoFormData.todoInput.title}
              placeholder={state.i18n.translate("form_input_title")}
            />
            <TodoListTextArea
              rows={4}
              placeholder={state.i18n.translate("form_input_content")}
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
              classnames="todoForm-addBtn"
              icon="plus">
              {state.i18n.translate("add_task")}
            </TodoListButton>
          </div>
        </form>
      ) : (
        <TodoFormEditItem
          TodoListAddOnClick={() => setTodoEditState(true)}
          TodoListSortOnClick={() => dispatch({ type: "SORT_ITEM_BY_DATE" })}
          sortStateIcon={state.todo.option.SortState ? "sort-descending" : "sort-ascending"}
        />
      )}
    </>
  );
};
