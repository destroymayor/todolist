import React, { useContext } from "react";

import { DarkModeContext } from "hooks/useContextTheme";

import { Input } from "antd";
const { TextArea } = Input;

const TodoListInput = props => {
  const { theme } = useContext(DarkModeContext);
  const themeBg = `${theme.darkMode ? "dark" : "light"}`;
  const themeFont = `${theme.darkMode ? "dark-font" : "light-font"}`;

  return (
    <Input
      className={`${props.classNames} ${themeBg} ${themeFont}`}
      ref={props.refs}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

const TodoListTextArea = props => {
  const { theme } = useContext(DarkModeContext);
  const themeBg = `${theme.darkMode ? "dark" : "light"}`;
  const themeFont = `${theme.darkMode ? "dark-font" : "light-font"}`;

  return (
    <TextArea
      className={`${props.classNames} ${themeBg} ${themeFont}`}
      rows={props.rows}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

export { TodoListInput, TodoListTextArea };
