import React, { useContext } from "react";

import { Switch } from "antd";

import { ReducerContext } from "reducers";

export default props => {
  const [state] = useContext(ReducerContext);
  return (
    <Switch
      style={{ backgroundColor: "#0f1114" }}
      checkedChildren="Light"
      unCheckedChildren="Dark"
      defaultChecked={!state.theme.darkMode}
      onChange={props.onChange}
    />
  );
};
