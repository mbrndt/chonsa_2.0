import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

export default function CalendarCom() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="items-center justify-center mb-28 ">
      <h1>calendar </h1>
      <div className="justify-center flex mb-5">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
}
