import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { UseContextWrapper } from "./components/hooks/useContextWrapper";
import App from "./components";

import "./styles/theme.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <UseContextWrapper>
    <App />
  </UseContextWrapper>,
  document.getElementById("root")
);

//hot reload
if (module.hot) {
  module.hot.accept("./components", () => {
    const NextApp = require("./components").default;
    ReactDOM.render(
      <UseContextWrapper>
        <NextApp />
      </UseContextWrapper>,
      document.getElementById("root")
    );
  });
}

serviceWorker.unregister();
