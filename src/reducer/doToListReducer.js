const doToListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, todoList: [action.addTodoListItem, ...state.todoList] };

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

    case "EDIT_ITEM":
      const todoList_EditItem = [...state.todoList];
      const findTodoListIndex = todoList_EditItem.findIndex((obj, index) => index === action.editIndex);
      const updateTodoItem = { ...todoList_EditItem[findTodoListIndex], title: action.editItem };
      const finalTodoList = [
        ...todoList_EditItem.slice(0, findTodoListIndex),
        updateTodoItem,
        ...todoList_EditItem.slice(findTodoListIndex + 1)
      ];
      return { ...state, todoList: finalTodoList };

    default:
      throw new Error();
  }
};

export default doToListReducer;
