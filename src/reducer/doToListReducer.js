const doToListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, todoList: [{ value: action.addItem }, ...state.todoList] };

    case "REMOVE_ITEM":
      const todoList_newState = [...state.todoList];
      todoList_newState.splice(action.removeItem, 1);
      return { ...state, todoList: todoList_newState };

    case "DONE_ITEM":
      const todoList_DoneItem = [...state.todoList];
      const todoListIndex = todoList_DoneItem[action.doneItem];
      todoList_DoneItem.splice(action.doneItem, 1);

      todoListIndex.done = !todoListIndex.done;
      todoListIndex.done ? todoList_DoneItem.push(todoListIndex) : todoList_DoneItem.unshift(todoListIndex);
      return { ...state, todoList: todoList_DoneItem };

    default:
      throw new Error();
  }
};

export default doToListReducer;
