import React, { useEffect, useContext, useCallback } from "react";
import "components/header/header.scss";

import moment from "moment";

import ThemeToggle from "components/utils/themeToggle";

import { ReducerContext } from "store";

export default () => {
  const [state, dispatch] = useContext(ReducerContext);

  useEffect(() => {
    localStorage.setItem("themeMode", JSON.stringify(state.theme));
  }, [state.theme]);

  const handleThemeToggle = useCallback(() => dispatch({ type: "DARK_MODE" }), [dispatch]);

  return (
    <header className="App-header">
      <div className="App-header-Item">
        <h2>Tasks</h2>
        <div className="App-header-date">{moment().format("YYYY-MM-DD")}</div>
      </div>
      <div className="App-header-Item">
        <a
          className="github-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/destroymayor/todolist/tree/gh-pages">
          GitHub
        </a>
        <ThemeToggle onChange={handleThemeToggle} />
      </div>
    </header>
  );
};
