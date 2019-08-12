import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import Page from "components";
import { ThemeProvider } from "hooks/useContextTheme";
import "styles/theme.scss";
import * as serviceWorker from "serviceWorker";

const App = () => {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept("components", () => {
    ReactDOM.render(<App />, document.getElementById("root"));
  });
}

serviceWorker.unregister();
