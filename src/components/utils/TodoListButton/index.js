import React, { useContext } from "react";
import { Button } from "antd";

import { DarkModeContext } from "hooks/useContextTheme";

export default ({ ghost, classNames, href, styles, icon, children, onClick }) => {
  const { theme } = useContext(DarkModeContext);
  const themeBg = `${theme.darkMode ? "dark" : "light"}`;
  const themeFont = `${theme.darkMode ? "dark-font" : "light-font"}`;

  return (
    <Button
      ghost={ghost}
      className={`${classNames} ${themeBg} ${themeFont}`}
      href={href}
      style={styles}
      icon={icon}
      onClick={onClick}>
      {children}
    </Button>
  );
};
