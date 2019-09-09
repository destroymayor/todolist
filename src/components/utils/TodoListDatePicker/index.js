import React, { useContext } from "react";
import "components/utils/todoListDatePicker/index.scss";

import moment from "moment";
import "moment/locale/zh-tw";

import { DatePicker } from "antd";
import localeZh_TW from "antd/lib/date-picker/locale/zh_TW";
import localeEn_US from "antd/lib/date-picker/locale/en_US";

import { ReducerContext } from "store";

export default React.memo(props => {
  const [state] = useContext(ReducerContext);

  const datePickerInputTheme = state.theme.darkMode ? "todoList-form-item-date-dark" : "todoList-form-item-date-light";
  const datePickerDropdownTheme = state.theme.darkMode ? "ant-calendar-panel-dark" : "ant-calendar-panel-light";

  moment.locale(state.i18n.langCode === "zh_tw" ? "zh_tw" : "en");

  return (
    <DatePicker
      {...props}
      allowClear={false}
      showToday={false}
      className={`${datePickerInputTheme}`}
      locale={state.i18n.langCode === "zh_tw" ? localeZh_TW : localeEn_US}
      format="YYYY-MM-DD"
      placeholder={state.i18n.translate("form_input_date")}
      dropdownClassName={datePickerDropdownTheme}
      style={props.styles}
      value={props.value !== undefined ? moment(props.value, "YYYY-MM-DD") : undefined}
      onChange={(value, dateString) => props.onChange(dateString)}
    />
  );
});
