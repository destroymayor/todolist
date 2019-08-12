import React, { useContext } from "react";

import { Switch } from "antd";

import { DarkModeContext } from "hooks/useContextTheme";
export default props => {
  const { theme } = useContext(DarkModeContext);
  return (
    <Switch
      style={{ backgroundColor: "#0f1114" }}
      checkedChildren="Light"
      unCheckedChildren="Dark"
      defaultChecked={!theme.darkMode}
      onChange={props.onChange}
    />
  );
};
