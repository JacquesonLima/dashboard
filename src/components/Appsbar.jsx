import React, { useState } from "react";
import "./Appsbar.css";

const Appsbar = ({ setActiveComponent }) => {
  const [isActive, setIsActive] = useState(false);

  const handleIconClick = (componentName) => {
    setActiveComponent((prev) => (prev === componentName ? "" : componentName));

    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  return (
    <div className="tabs-container">
      <div
        className="calendar-icon"
        onClick={() => handleIconClick("Calendar")}
      >
        <p className="icon-app">
          <i className="fa-solid fa-calendar-day"></i>
        </p>
      </div>
      <div className="timer-icon" onClick={() => handleIconClick("Timer")}>
        <p className="icon-app">
          <i className="fa-solid fa-bell"></i>
        </p>
      </div>
      <div className="tasks-icon" onClick={() => handleIconClick("Tasks")}>
        <p className="icon-app">
          <i className="fa-solid fa-list-check"></i>
        </p>
      </div>
      <div
        className="expensive-icon"
        onClick={() => handleIconClick("Expensive")}
      >
        <p className="icon-app">
          <i className="fa-solid fa-cart-shopping"></i>
        </p>
      </div>
      <div
        className="background-icon"
        onClick={() => handleIconClick("Background")}
      >
        <p className="icon-app">
          <i className="fa-solid fa-images"></i>
        </p>
      </div>
    </div>
  );
};

export default Appsbar;
