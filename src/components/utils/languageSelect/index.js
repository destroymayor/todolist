/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useContext, useCallback } from "react";
import "components/utils/languageSelect/index.scss";

import { Menu, Dropdown, Icon } from "antd";
import { ReducerContext } from "reducers";

export default () => {
  const [state, dispatch] = useContext(ReducerContext);
  const themeBtn = state.theme.darkMode ? "dark-button" : "light-button";

  const themeListItem = state.theme.darkMode ? "dark-languageSelect" : "light-languageSelect";

  useEffect(() => {
    localStorage.setItem("i18nLanguage", JSON.stringify(state.i18n.langCode));
  }, [state.i18n.langCode]);

  const onLanguageSelect = useCallback(value => dispatch({ type: "SET_LANGUAGE", langCode: value }), [dispatch]);

  return (
    <Dropdown
      placement="bottomRight"
      overlay={
        <Menu className={themeListItem} onClick={e => onLanguageSelect(e.item.props.value)}>
          <Menu.Item key="1" value="zh_tw">
            中文
          </Menu.Item>
          <Menu.Item key="2" value="en">
            English
          </Menu.Item>
        </Menu>
      }>
      <a className={`languageSelectBtn ${themeBtn}`}>
        {state.i18n.translate("translations")} <Icon type="down" />
      </a>
    </Dropdown>
  );
};
