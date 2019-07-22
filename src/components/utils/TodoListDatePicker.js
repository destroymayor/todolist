import React from "react";
import locale from "antd/lib/date-picker/locale/zh_TW";
import { DatePicker } from "antd";
import moment from "moment";

function TodoListDatePicker({ theme, defaultValue, onChange }) {
  return (
    <DatePicker
      className={theme}
      locale={locale}
      format="YYYY-MM-DD"
      placeholder="新增日期/時間"
      defaultValue={defaultValue !== undefined ? moment(defaultValue, "YYYY-MM-DD") : undefined}
      onChange={(value, dateString) => onChange(dateString)}
    />
  );
}

export default TodoListDatePicker;
