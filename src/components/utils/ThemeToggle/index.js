import React, { useContext } from "react";
import "components/utils/ThemeToggle/index.css";

import { Switch } from "antd";

import { DarkModeContext } from "hooks/useContextTheme";

export default ({ onChange }) => {
  const { theme } = useContext(DarkModeContext);
  return (
    <Switch
      className="theme-toggle"
      checkedChildren="Light"
      unCheckedChildren="Dark"
      defaultChecked={!theme.darkMode}
      onChange={onChange}
    />
  );
};
