const doToListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, todoList: [...state.todoList, action.addItem] };
    case "REMOVE_ITEM":
      const newState = [...state.todoList];
      newState.splice(action.removeItem, 1);
      return { ...state, todoList: newState };
    default:
      throw new Error();
  }
};

export default doToListReducer;
