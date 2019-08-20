import React, { useContext, useCallback } from "react";

import { Select } from "antd";
import { ReducerContext } from "reducers";

const { Option } = Select;
export default props => {
  const [state, dispatch] = useContext(ReducerContext);

  const onLanguageSelect = useCallback(value => dispatch({ type: "SET_LANGUAGE", langCode: value }), [dispatch]);

  return (
    <Select defaultValue={state.i18n.translate("language")} className={props.classnames} onSelect={onLanguageSelect}>
      <Option value={"zh_tw"}>中文</Option>
      <Option value={"en"}>English</Option>
    </Select>
  );
};
