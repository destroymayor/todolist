import React from "react";
import "./index.css";

import { Switch } from "antd";

const themeModeSwitch = ({ onChange }) => {
  return <Switch className="theme-toggle" checkedChildren="Light" unCheckedChildren="Dark" defaultChecked onChange={onChange} />;
};

export default themeModeSwitch;
