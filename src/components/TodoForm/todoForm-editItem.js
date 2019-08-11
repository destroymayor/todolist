import React, { useState } from "react";

//components
import TodoListButton from "components/utils/todoListButton";

export default props => {
  const [sortState, setSortState] = useState(true);

  return (
    <div className="todoForm-editItem">
      <TodoListButton ghost={true} classNames="todoForm-editItem-addBtn" icon="plus" onClick={props.TodoListAddOnClick}>
        新增工作
      </TodoListButton>
      <TodoListButton
        ghost={true}
        classNames="todoForm-editItem-menu"
        icon="sort-ascending"
        onClick={() => {
          setSortState(!sortState);
          props.TodoListSortOnClick(sortState);
        }}>
        依日期排序
      </TodoListButton>
    </div>
  );
};
