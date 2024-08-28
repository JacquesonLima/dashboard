import React, { useEffect, useState } from "react";
import "./Calendar.css";
import Draggable from "react-draggable";

const Calendar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`calendar-container ${visible ? "visible" : ""}`}>
      <Draggable handle=".drag-handle">
        <div className="calendar-content">
          <div className="calendar-header">
            <h3>Monday</h3>
            <i className="fa-solid fa-up-down-left-right"></i>
          </div>
          <p>
            <i className="fa-solid fa-plus"></i> Add
          </p>
        </div>
      </Draggable>
      <Draggable>
        <div className="calendar-content">
          <div className="calendar-header">
            <h3>Tuesday</h3>
            <i className="fa-solid fa-up-down-left-right"></i>
          </div>
          <p>
            <i className="fa-solid fa-plus"></i> Add
          </p>
        </div>
      </Draggable>
      <Draggable>
        <div className="calendar-content">
          <div className="calendar-header">
            <h3>Wednesday</h3>
            <i className="fa-solid fa-up-down-left-right"></i>
          </div>
          <p>
            <i className="fa-solid fa-plus"></i> Add
          </p>
        </div>
      </Draggable>
      <Draggable>
        <div className="calendar-content">
          <div className="calendar-header">
            <h3>Thursday</h3>
            <i className="fa-solid fa-up-down-left-right"></i>
          </div>
          <p>
            <i className="fa-solid fa-plus"></i> Add
          </p>
        </div>
      </Draggable>
      <Draggable>
        <div className="calendar-content">
          <div className="calendar-header">
            <h3>Friday</h3>
            <i className="fa-solid fa-up-down-left-right"></i>
          </div>
          <p>
            <i className="fa-solid fa-plus"></i> Add
          </p>
        </div>
      </Draggable>
    </div>
  );
};

export default Calendar;
