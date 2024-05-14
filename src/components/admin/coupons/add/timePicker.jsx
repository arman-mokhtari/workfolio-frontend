"use client";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/prime.css";
import { TextField } from "@mui/material";
const CouponTimePicker = ({ expireDate, setExpireDate }) => {
  return (
    <DatePicker
      zIndex={10000}
      value={expireDate}
      format="YYYY/MM/DD"
      calendar={persian}
      locale={persian_fa}
      calendarPosition="bottom-right"
      onChange={(date) => setExpireDate(date)}
      className="rmdp-prime"
      render={(value, openCalendar) => {
        return <TextField value={value} onClick={openCalendar} />;
      }}
    />
  );
};
export default CouponTimePicker;
