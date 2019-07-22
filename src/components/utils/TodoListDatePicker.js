import React from "react";
import locale from "antd/lib/date-picker/locale/zh_TW";
import { DatePicker } from "antd";
import moment from "moment";

function TodoListDatePicker({ theme, defaultValue, onChange }) {
  return (
    <DatePicker
      className={`${theme ? "todoList-form-item-date-dark" : "todoList-form-item-date-light"}`}
      locale={locale}
      format="YYYY-MM-DD"
      placeholder="新增日期/時間"
      defaultValue={defaultValue !== "" && moment(defaultValue, "YYYY-MM-DD")}
      onChange={(value, dateString) => onChange(dateString)}
    />
  );
}

export default TodoListDatePicker;
