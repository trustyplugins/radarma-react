import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const CommonDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date: any) => {
      setSelectedDate(date);
    };
  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}               
      placeholderText='DD/MM/YYYY'
      className="form-control datetimepicker w-100"
    />
  )
}

export default CommonDatePicker