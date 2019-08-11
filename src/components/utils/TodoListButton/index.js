import React, { useContext } from "react";
import { Button } from "antd";

import { DarkModeContext } from "hooks/useContextTheme";

export default props => {
  const { theme } = useContext(DarkModeContext);
  const themeBg = `${theme.darkMode ? "dark" : "light"}`;
  const themeFont = `${theme.darkMode ? "dark-font" : "light-font"}`;

  return (
    <Button
      ghost={props.ghost}
      className={`${props.classNames} ${themeBg} ${themeFont}`}
      href={props.href}
      style={props.styles}
      icon={props.icon}
      onClick={props.onClick}
      htmlType={props.htmlType}
      type={props.type}
      disabled={props.disabled}>
      {props.children}
    </Button>
  );
};
