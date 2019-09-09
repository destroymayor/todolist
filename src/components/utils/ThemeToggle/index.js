import React, { useContext } from "react";

import { Switch } from "antd";
import { DarkMode, LightMode } from "components/utils/themeToggle/themeModeImage";

import { ReducerContext } from "store";

export default React.memo(props => {
  const [state] = useContext(ReducerContext);
  return (
    <Switch
      style={{ backgroundColor: "#0f1114" }}
      checkedChildren={<LightMode />}
      unCheckedChildren={<DarkMode />}
      defaultChecked={!state.theme.darkMode}
      onChange={props.onChange}
    />
  );
});
