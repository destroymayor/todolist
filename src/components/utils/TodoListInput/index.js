import React, { useContext } from "react";

import { ReducerContext } from "reducers";

import { Input } from "antd";
const { TextArea } = Input;

const TodoListInput = props => {
  const [state] = useContext(ReducerContext);
  const themeBg = `${state.theme.darkMode ? "dark" : "light"}`;
  const themeFont = `${state.theme.darkMode ? "dark-font" : "light-font"}`;

  return <Input {...props} className={`${props.className} ${themeBg} ${themeFont} `} ref={props.refs} />;
};

const TodoListTextArea = props => {
  const [state] = useContext(ReducerContext);
  const themeBg = `${state.theme.darkMode ? "dark" : "light"}`;
  const themeFont = `${state.theme.darkMode ? "dark-font" : "light-font"}`;

  return <TextArea {...props} className={`${props.className} ${themeBg} ${themeFont}`} />;
};

export { TodoListInput, TodoListTextArea };
