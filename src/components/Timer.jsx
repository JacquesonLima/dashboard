import React, { useState, useEffect } from "react";
import "./Timer.css";
import alertWork from "../assets/sounds/alertWork.mp3";
import alertBreak from "../assets/sounds/alertBreak.mp3";

const Timer = () => {
  const [visible, setVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1500); // Tempo inicial (25 minutos)
  const [isActive, setIsActive] = useState(false);
  const [isWorkMode, setIsWorkMode] = useState(true);
  const [customTime, setCustomTime] = useState("25:00");

  const soundWork = new Audio(alertWork);
  const soundBreak = new Audio(alertBreak);

  useEffect(() => {
    setVisible(true);
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleTimerEnd();
      clearInterval(interval);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const handleTimerEnd = () => {
    setIsActive(false);

    if (isWorkMode) {
      soundWork.play(alertWork);
      setIsWorkMode(false);
      setTimeLeft(300);
      setCustomTime("5:00");
      setIsActive(true);
    } else {
      soundBreak.play(alertBreak);
    }
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(isWorkMode ? 1500 : 300);
    setCustomTime(isWorkMode ? "25:00" : "05:00");
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleCustomTimeChange = (e) => {
    const input = e.target.value;
    setCustomTime(input);

    const [minutes, seconds] = input.split(":").map(Number);

    if (!isActive && minutes >= 0 && seconds >= 0 && seconds < 60) {
      setTimeLeft(minutes * 60 + (seconds || 0));
    }
  };

  return (
    <div className={`timer-container ${visible ? "visible" : ""}`}>
      <div className="timer-options">
        <button
          id="button-focus"
          onClick={() => {
            setIsWorkMode(true);
            setTimeLeft(1500);
            setCustomTime("25:00");
            setIsActive(false);
          }}
        >
          Focus
        </button>
        <button
          id="button-break"
          onClick={() => {
            setIsWorkMode(false);
            setTimeLeft(300);
            setCustomTime("5:00");
            setIsActive(true);
          }}
        >
          Break
        </button>
      </div>
      <div className="timer-content">
        <h3>{formatTime(timeLeft)}</h3>
        <p>Change Time</p>
        <input
          type="text"
          id="timer-value"
          value={customTime}
          onChange={handleCustomTimeChange}
          placeholder="25:00"
          maxLength={5}
          disabled={isActive}
        />
      </div>
      <div className="timer-start">
        <button id="button-start" onClick={toggleTimer}>
          {isActive ? "Pause" : "Start"}
        </button>
        <button id="button-reset" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
