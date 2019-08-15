import React, { useContext } from "react";
import "components/header/header.scss";

import moment from "moment";

import { DarkModeContext } from "hooks/useContextTheme";
import ThemeToggle from "components/utils/themeToggle";

export default () => {
  const { DarkModeDispatch } = useContext(DarkModeContext);

  return (
    <header className="App-header">
      <div className="App-header-Item">
        <h2>Tasks</h2>
        <div className="App-header-date">{moment().format("YYYY-MM-DD")}</div>
      </div>
      <div className="App-header-Item">
        <iframe
          title="github-todolist"
          src="https://ghbtns.com/github-btn.html?user=destroymayor&repo=todolist&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="80px"
          height="20px"
        />
        <ThemeToggle onChange={() => DarkModeDispatch({ type: "DARK_MODE" })} />
      </div>
    </header>
  );
};
