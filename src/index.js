import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import App from "./components";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

//hot reload
if (module.hot) {
  module.hot.accept("./components", () => {
    const NextApp = require("./components").default;
    ReactDOM.render(<NextApp />, document.getElementById("root"));
  });
}

serviceWorker.unregister();
