import React from "react";
import { useState, useEffect } from "react";
import "./Clock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const tick = () => {
      setTime(new Date());
    };

    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes}`;
  const day = time.getDate().toString();
  const month = time.toLocaleString("en", { month: "long" });
  const year = time.getFullYear();
  const dateToday = `${day} ${month} ${year}`;

  return (
    <div className="clock">
      <h1>{formattedTime}</h1>
      <h2>{dateToday}</h2>
    </div>
  );
};

export default Clock;
