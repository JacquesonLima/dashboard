import React from "react";
import "./Appsbar.css";
import Calendar from "./Calendar";
import Timer from "./Timer";
import Tasks from "./Tasks";
import Background from "./Background";
import Expensive from "./Expensive";

const Appsbar = () => {
  return (
    <div className="tabs-container">
      <Calendar></Calendar>
      <Timer></Timer>
      <Tasks></Tasks>
      <Expensive></Expensive>
      <Background></Background>
    </div>
  );
};

export default Appsbar;
