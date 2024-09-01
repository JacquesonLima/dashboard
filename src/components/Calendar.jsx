import React, { useEffect, useState } from "react";
import "./Calendar.css";
import Draggable from "react-draggable";

const Calendar = ({ title }) => {
  const [visible, setVisible] = useState(false);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    const savedTasks = localStorage.getItem(`tasks-${title}`);
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
    setVisible(true);
  }, [title]);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem(`tasks-${title}`, JSON.stringify(tasks));
    }
  }, [tasks, title]);

  const handleAddButtonClick = () => {
    if (showInput && task.trim()) {
      setTasks((prevTasks) => [...prevTasks, task.trim()]);
      setTask("");
      setShowInput(false);
    } else {
      setShowInput(true);
    }
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
    localStorage.setItem(`tasks-${title}`, JSON.stringify(updatedTasks));
  };

  return (
    <div className={`calendar-container ${visible ? "visible" : ""}`}>
      <Draggable handle=".drag-handle">
        <div className="calendar-content">
          <div className="calendar-header">
            <h3>{title}</h3>
            <p className="drag-handle">
              <i className="fa-solid fa-up-down-left-right"></i>
            </p>
          </div>
          <div className="calendar-tasks">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="calendar-task-item"
                onDoubleClick={() => deleteTask(index)}
              >
                {task}
              </div>
            ))}
          </div>
          {showInput && (
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter a task"
              className="calendar-input"
              maxLength={20}
            />
          )}
          <p className="add-icon" onClick={handleAddButtonClick}>
            <i className="fa-solid fa-plus"></i> Add Task
          </p>
        </div>
      </Draggable>
    </div>
  );
};

export default Calendar;
