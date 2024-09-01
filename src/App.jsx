import React, { useState } from "react";
import "./App.css";
import Appsbar from "./components/Appsbar";
import Calendar from "./components/Calendar";
import Clock from "./components/Clock";
import Timer from "./components/Timer";
import Tasks from "./components/Tasks";
import Expensive from "./components/Expensive";
import Background from "./components/Background";

function App() {
  const [activeComponent, setActiveComponent] = useState(0);

  const daysOfWeek = [
    {
      title: "Monday",
    },
    {
      title: "Tuesday",
    },
    {
      title: "Wednesday",
    },
    {
      title: "Thrusday",
    },
    {
      title: "Friday",
    },
  ];

  return (
    <div className="app">
      <section className="top-section">
        <Clock></Clock>
      </section>
      <section className="content-section">
        {activeComponent === "Calendar" &&
          daysOfWeek.map((data) => <Calendar title={data.title}></Calendar>)}
        {activeComponent === "Timer" && <Timer />}
        {activeComponent === "Tasks" && <Tasks />}
        {activeComponent === "Expensive" && <Expensive />}
        {activeComponent === "Background" && <Background />}
      </section>
      <section className="bottom-section">
        <Appsbar setActiveComponent={setActiveComponent}></Appsbar>
      </section>
    </div>
  );
}

export default App;
