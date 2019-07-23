import React, { useContext } from "react";

import { DarkModeContext } from "../../hooks/useContextWrapper";

import { Input } from "antd";
const { TextArea } = Input;

const TodoListInput = ({ classNames, refs, value, placeholder, onChange }) => {
  const { theme } = useContext(DarkModeContext);
  const themeBg = `${theme.darkMode ? "dark" : "light"}`;
  const themeFont = `${theme.darkMode ? "dark-font" : "light-font"}`;

  return (
    <Input
      className={`${classNames} ${themeBg} ${themeFont}`}
      ref={refs}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

const TodoListTextArea = ({ classNames, rows, value, placeholder, onChange }) => {
    const { theme } = useContext(DarkModeContext);
    const themeBg = `${theme.darkMode ? "dark" : "light"}`;
    const themeFont = `${theme.darkMode ? "dark-font" : "light-font"}`;
  return <TextArea className={`${classNames} ${themeBg} ${themeFont}`} rows={rows} value={value} placeholder={placeholder} onChange={onChange} />;
};

export { TodoListInput, TodoListTextArea };
