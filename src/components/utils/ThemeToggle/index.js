import React, { useContext } from "react";
import "components/utils/themeToggle/index.scss";

import { Switch } from "antd";

import { DarkModeContext } from "hooks/useContextTheme";
export default props => {
  const { theme } = useContext(DarkModeContext);
  return (
    <Switch
      className="theme-toggle"
      checkedChildren="Light"
      unCheckedChildren="Dark"
      defaultChecked={!theme.darkMode}
      onChange={props.onChange}
    />
  );
};
