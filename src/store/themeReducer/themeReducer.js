const localState = JSON.parse(localStorage.getItem("themeMode"));

const initState = localState || { darkMode: false };

const themeReducer = (state = initState, action) => {
  switch (action.type) {
    case "DARK_MODE":
      return { ...state, darkMode: !state.darkMode };

    default:
      return state;
  }
};

export { themeReducer };
