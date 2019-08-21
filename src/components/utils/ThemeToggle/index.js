import React, { useContext } from "react";

import { Switch } from "antd";
import { DarkImage, LightMode } from "components/utils/themeToggle/themeModeImage";

import { ReducerContext } from "reducers";

export default props => {
  const [state] = useContext(ReducerContext);
  return (
    <Switch
      style={{ backgroundColor: "#0f1114" }}
      checkedChildren={<LightMode />}
      unCheckedChildren={<DarkImage />}
      defaultChecked={!state.theme.darkMode}
      onChange={props.onChange}
    />
  );
};
