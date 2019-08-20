import React, { useContext } from "react";
import { Button } from "antd";

import { ReducerContext } from "reducers";

export default React.memo(props => {
  const [state] = useContext(ReducerContext);
  const themeBg = `${state.theme.darkMode ? "dark-button" : "light-button"}`;

  return (
    <Button {...props} className={`${themeBg} ${props.classnames}`} style={props.styles} onClick={props.onClick}>
      {props.children}
    </Button>
  );
});
