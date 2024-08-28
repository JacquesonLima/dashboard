import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`timer-container ${visible ? "visible" : ""}`}>
      <div className="timer-options">
        <button id="button-focus">Focus</button>
        <button id="button-break">Break</button>
      </div>
      <div className="timer-content">
        <h3>25:00</h3>
        <p>Change Time</p>
        <input type="text" id="timer-value" placeholder="25:00" maxLength={5} />
      </div>
      <div className="timer-start">
        <button id="button-start">Start</button>
      </div>
    </div>
  );
};

export default Timer;
