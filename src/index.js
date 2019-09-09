import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "styles/theme.scss";

import * as serviceWorker from "serviceWorker";
import Page from "components";

import { reducers, ReducerContext } from "store";
const initState = reducers();

const App = () => {
  const reducer = useReducer(reducers, initState);
  return (
    <ReducerContext.Provider value={reducer}>
      <Page />
    </ReducerContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept("components", () => {
    ReactDOM.render(<App />, document.getElementById("root"));
  });
}

serviceWorker.register();
