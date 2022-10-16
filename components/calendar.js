import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

export default function CalendarCom() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="bg-lilacBg items-center justify-center ">
      <h1>calendar </h1>
      <div className="justify-center flex bg-lilacBg">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
}
