import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import App from "./components/TodoList/index";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

//hot reload
if (module.hot) {
  module.hot.accept("./components/TodoList/index", () => {
    const NextApp = require("./components/TodoList/index").default;
    ReactDOM.render(<NextApp />, document.getElementById("root"));
  });
}

serviceWorker.unregister();
