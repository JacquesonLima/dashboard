import React, { useState } from "react";
import "./App.css";
import Appsbar from "./components/Appsbar";
import Calendar from "./components/Calendar";
import Clock from "./components/Clock";
import Timer from "./components/Timer";
import Tasks from "./components/Tasks";
import Expensive from "./components/Expensive";
import Background from "./components/Background";
import Draggable from "react-draggable";

function App() {
  const [activeComponent, setActiveComponent] = useState(0);

  return (
    <div className="app">
      <section className="top-section">
        <Clock></Clock>
      </section>
      <section className="content-section">
        {activeComponent === "Calendar" && <Calendar />}
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
