import React from "react";
import "components/themeToggle/index.css";

import { Switch } from "antd";

const themeModeSwitch = ({ onChange }) => {
  return <Switch className="theme-toggle" checkedChildren="Light" unCheckedChildren="Dark" defaultChecked onChange={onChange} />;
};

export default themeModeSwitch;
