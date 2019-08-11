import React, { useContext } from "react";
import { Button } from "antd";

import { DarkModeContext } from "hooks/useContextTheme";

export default props => {
  const { theme } = useContext(DarkModeContext);
  const themeBg = `${theme.darkMode ? "dark-button" : "light-button"}`;

  return (
    <Button
      ghost={props.ghost}
      className={`${props.classNames} ${themeBg} `}
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
