import React, { useContext } from "react";
import "components/utils/todoListDatePicker/index.scss";

import locale from "antd/lib/date-picker/locale/zh_TW";
import { DatePicker } from "antd";
import moment from "moment";

import { ReducerContext } from "reducers";

export default props => {
  const [state] = useContext(ReducerContext);
  const datePickerInputTheme = state.theme.darkMode ? "todoList-form-item-date-dark" : "todoList-form-item-date-light";
  const datePickerDropdownTheme = state.theme.darkMode ? "ant-calendar-panel-dark" : "ant-calendar-panel-light";

  return (
    <DatePicker
      {...props}
      allowClear={false}
      showToday={false}
      className={`${datePickerInputTheme}`}
      locale={locale}
      format="YYYY-MM-DD"
      placeholder={state.i18n.translate("form_input_date")}
      dropdownClassName={datePickerDropdownTheme}
      style={props.styles}
      value={props.value !== undefined ? moment(props.value, "YYYY-MM-DD") : undefined}
      onChange={(value, dateString) => props.onChange(dateString)}
    />
  );
};
