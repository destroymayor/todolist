import React, { useContext } from "react";
import "components/themeToggle/index.css";

import { Switch } from "antd";

import { DarkModeContext } from "hooks/useContextWrapper";

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
