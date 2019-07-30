import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import Page from "components";
import { UseContextTheme } from "hooks/useContextTheme";
import "styles/theme.css";
import * as serviceWorker from "serviceWorker";

const App = () => {
  return (
    <UseContextTheme>
      <Page />
    </UseContextTheme>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

//hot reload
if (module.hot) {
  module.hot.accept("components", () => {
    ReactDOM.render(<App />, document.getElementById("root"));
  });
}

serviceWorker.unregister();
