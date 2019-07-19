const editListReducer = (state, action) => {
  switch (action.type) {
    case "EDIT_TITLE":
      return { ...state, todoItem: { ...state.todoItem, title: action.todoList_title } };

    case "EDIT_CONTENT":
      return { ...state, todoItem: { ...state.todoItem, content: action.todoList_content } };

    case "EDIT_DATE":
      return { ...state, todoItem: { ...state.todoItem, date: action.todoList_date } };
    default:
      return state;
  }
};

export default editListReducer;
