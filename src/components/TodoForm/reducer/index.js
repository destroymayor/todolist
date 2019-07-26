const inputTodoReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_TITLE":
      return { ...state, todoInput: { ...state.todoInput, title: action.inputTitle } };

    case "INPUT_CONTENT":
      return { ...state, todoInput: { ...state.todoInput, content: action.inputContent } };

    case "INPUT_DATE":
      return { ...state, todoInput: { ...state.todoInput, date: action.inputDate } };

    case "INPUT_CLEAR":
      return { ...state, todoInput: { ...state.todoInput, title: "", content: "", date: "", done: false } };

    default:
      return state;
  }
};

export default inputTodoReducer;
