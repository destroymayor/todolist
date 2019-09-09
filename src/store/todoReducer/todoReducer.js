const initState = {
  todoList: [],
  option: { SortState: true }
};

const localStorageTodoData = JSON.parse(localStorage.getItem("todo"));

const todoReducer = (state = localStorageTodoData || initState, action) => {
  switch (action.type) {
    // 增加項目
    case "ADD_ITEM":
      return { ...state, todoList: [action.addTodoListItem, ...state.todoList] };

    // 刪除項目
    case "REMOVE_ITEM":
      const todoList_newState = [...state.todoList];
      todoList_newState.splice(action.removeItem, 1);
      return { ...state, todoList: todoList_newState };

    // 項目標示完成
    case "DONE_ITEM":
      const todoList_DoneItem = [...state.todoList];
      const todoListIndex = todoList_DoneItem[action.doneItem];
      todoList_DoneItem.splice(action.doneItem, 1);

      todoListIndex.done = !todoListIndex.done;
      todoListIndex.done ? todoList_DoneItem.push(todoListIndex) : todoList_DoneItem.unshift(todoListIndex);
      return { ...state, todoList: todoList_DoneItem };

    // 編輯項目
    case "EDIT_ITEM":
      const todoList_EditItem = [...state.todoList];
      const findTodoListIndex = todoList_EditItem.findIndex((obj, index) => index === action.editIndex);
      const finalTodoList = [
        ...todoList_EditItem.slice(0, findTodoListIndex),
        action.editItem,
        ...todoList_EditItem.slice(findTodoListIndex + 1)
      ];
      return { ...state, todoList: finalTodoList };

    // 項目排序
    case "SORT_ITEM_BY_DATE":
      const todoList_SortItem = [...state.todoList];
      state.option.SortState = !state.option.SortState;

      const SortResult = todoList_SortItem.sort((after, before) => {
        let SortAfter = Number(after.date.replace(new RegExp("-", "g"), ""));
        let SortBefore = Number(before.date.replace(new RegExp("-", "g"), ""));
        return state.option.SortState ? SortAfter - SortBefore : SortBefore - SortAfter;
      });

      return { ...state, todoList: SortResult };

    default:
      return state;
  }
};

export { todoReducer };
