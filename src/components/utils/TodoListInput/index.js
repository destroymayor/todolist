import React, { useContext } from "react";

import { ReducerContext } from "reducers";

import { Input } from "antd";
const { TextArea } = Input;

const TodoListInput = props => {
  const [state] = useContext(ReducerContext);
  const themeBg = `${state.theme.darkMode ? "dark" : "light"}`;
  const themeFont = `${state.theme.darkMode ? "dark-font" : "light-font"}`;

  return (
    <Input
      {...props}
      placeholder={state.i18n.translate("form_input_title")}
      className={`${props.className} ${themeBg} ${themeFont} `}
      ref={props.refs}
    />
  );
};

const TodoListTextArea = props => {
  const [state] = useContext(ReducerContext);
  const themeBg = `${state.theme.darkMode ? "dark" : "light"}`;
  const themeFont = `${state.theme.darkMode ? "dark-font" : "light-font"}`;

  return (
    <TextArea
      {...props}
      placeholder={state.i18n.translate("form_input_content")}
      className={`${props.className} ${themeBg} ${themeFont}`}
    />
  );
};

export { TodoListInput, TodoListTextArea };
