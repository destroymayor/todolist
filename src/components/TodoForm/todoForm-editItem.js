import React, { useContext } from "react";

import { ReducerContext } from "reducers";

//components
import TodoListButton from "components/utils/todoListButton";
import LanguageSelect from "components/utils/languageSelect";

export default props => {
  const [state] = useContext(ReducerContext);

  return (
    <div className="todoForm-editItem">
      <TodoListButton ghost={true} classnames="todoForm-editItem-addBtn" icon="plus" onClick={props.TodoListAddOnClick}>
        {state.i18n.translate("add_task")}
      </TodoListButton>
      <TodoListButton
        ghost={true}
        classnames="todoForm-editItem-menu"
        icon={props.sortStateIcon}
        onClick={props.TodoListSortOnClick}>
        {state.i18n.translate("sort_date")}
      </TodoListButton>
      <LanguageSelect classnames="todoForm-editItem-languageSelect" />
    </div>
  );
};
