import React, { useContext } from "react";
import "components/utils/TodoListDatePicker/index.css";

import locale from "antd/lib/date-picker/locale/zh_TW";
import { DatePicker } from "antd";
import moment from "moment";

import { DarkModeContext } from "hooks/useContextWrapper";

function TodoListDatePicker({ value, onChange }) {
  const { theme } = useContext(DarkModeContext);
  const datePickerInputTheme = theme.darkMode ? "todoList-form-item-date-dark" : "todoList-form-item-date-light";
  const datePickerDropdownTheme = theme.darkMode ? "ant-calendar-panel-dark" : "ant-calendar-panel-light";

  return (
    <DatePicker
      allowClear={false}
      className={datePickerInputTheme}
      locale={locale}
      format="YYYY-MM-DD"
      placeholder="新增日期/時間"
      dropdownClassName={datePickerDropdownTheme}
      value={value !== undefined ? moment(value, "YYYY-MM-DD") : undefined}
      onChange={(value, dateString) => onChange(dateString)}
    />
  );
}

export default TodoListDatePicker;
