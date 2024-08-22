import React from "react";
import "./Calendar.css";

const Calendar = () => {
  return (
    <div className="calendar-container">
      <p className="icon-app">
        <i class="fa-solid fa-calendar-day"></i>
      </p>
      <div className="calendar-content"></div>
    </div>
  );
};

export default Calendar;
