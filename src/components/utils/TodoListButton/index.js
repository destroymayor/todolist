import React, { useContext } from "react";
import { Button } from "antd";

import { DarkModeContext } from "hooks/useContextWrapper";

const TodoListButton = ({ ghost, classNames, styles, icon, children, onClick }) => {
  const { theme } = useContext(DarkModeContext);
  const themeBg = `${theme.darkMode ? "dark" : "light"}`;
  const themeFont = `${theme.darkMode ? "dark-font" : "light-font"}`;

  return (
    <Button ghost={ghost} className={`${classNames} ${themeBg} ${themeFont}`} style={styles} icon={icon} onClick={onClick}>
      {children}
    </Button>
  );
};

export default TodoListButton;
