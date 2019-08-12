import React from "react";

//components
import TodoListButton from "components/utils/todoListButton";

export default props => {
  return (
    <div className="todoForm-editItem">
      <TodoListButton ghost={true} classNames="todoForm-editItem-addBtn" icon="plus" onClick={props.TodoListAddOnClick}>
        新增工作
      </TodoListButton>
      <TodoListButton
        ghost={true}
        classNames="todoForm-editItem-menu"
        icon={props.sortStateIcon}
        onClick={props.TodoListSortOnClick}>
        依日期排序
      </TodoListButton>
    </div>
  );
};
