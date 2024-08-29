import React, { useEffect, useState } from "react";
import "./Calendar.css";
import Draggable from "react-draggable";

const Calendar = () => {
  const [visible, setVisible] = useState(false);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleAddButtonClick = () => {
    if (showInput && task) {
      setTasks([...tasks, task]);
      setTask("");
      setShowInput(false);
    } else {
      setShowInput(true);
    }
    console.log(tasks);
  };

  // const addTask = () => {
  //   if (task) {
  //     setTasks([...tasks, task]);
  //     setTask("");
  //   }
  // };

  const deleteTask = (indexToDelete) => {
    const newTasks = tasks.filter((_, index) => index != indexToDelete);
    setTasks(newTasks);
  };

  return (
    <div className={`calendar-container ${visible ? "visible" : ""}`}>
      <Draggable handle=".drag-handle">
        <div className="calendar-content">
          <div className="calendar-header">
            <h3>Monday</h3>
            <p className="drag-handle">
              <i className="fa-solid fa-up-down-left-right"></i>
            </p>
          </div>
          {tasks.map((task, index) => (
            <div
              key={index}
              className="calendar-task-item"
              onDoubleClick={() => deleteTask(index)}
            >
              {task}
            </div>
          ))}
          <div className="calendar-input-task">
            {showInput && (
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            )}
          </div>
          <p className="add-icon" onClick={handleAddButtonClick}>
            <i className="fa-solid fa-plus"></i> Add
          </p>
        </div>
      </Draggable>
      <Draggable handle=".drag-handle">
        <div className="calendar-content">
          <div className="calendar-header">
            <h3>Tuesday</h3>
            <p className="drag-handle">
              <i className="fa-solid fa-up-down-left-right"></i>
            </p>
          </div>
          {tasks.map((task, index) => (
            <div
              key={index}
              className="calendar-task-item"
              onDoubleClick={() => deleteTask(index)}
            >
              {task}
            </div>
          ))}
          <div className="calendar-input-task">
            {showInput && (
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            )}
          </div>
          <p className="add-icon" onClick={handleAddButtonClick}>
            <i className="fa-solid fa-plus"></i> Add
          </p>
        </div>
      </Draggable>
      <Draggable handle=".drag-handle">
        <div className="calendar-content">
          <div className="calendar-header">
            <h3>Wednesday</h3>
            <p className="drag-handle">
              <i className="fa-solid fa-up-down-left-right"></i>
            </p>
          </div>
          {tasks.map((task, index) => (
            <div
              key={index}
              className="calendar-task-item"
              onDoubleClick={() => deleteTask(index)}
            >
              {task}
            </div>
          ))}
          <div className="calendar-input-task">
            {showInput && (
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            )}
          </div>
          <p className="add-icon" onClick={handleAddButtonClick}>
            <i className="fa-solid fa-plus"></i> Add
          </p>
        </div>
      </Draggable>
      <Draggable handle=".drag-handle">
        <div className="calendar-content">
          <div className="calendar-header">
            <h3>Thursday</h3>
            <p className="drag-handle">
              <i className="fa-solid fa-up-down-left-right"></i>
            </p>
          </div>
          {tasks.map((task, index) => (
            <div
              key={index}
              className="calendar-task-item"
              onDoubleClick={() => deleteTask(index)}
            >
              {task}
            </div>
          ))}
          <div className="calendar-input-task">
            {showInput && (
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            )}
          </div>
          <p className="add-icon" onClick={handleAddButtonClick}>
            <i className="fa-solid fa-plus"></i> Add
          </p>
        </div>
      </Draggable>
      <Draggable handle=".drag-handle">
        <div className="calendar-content">
          <div className="calendar-header">
            <h3>Friday</h3>
            <p className="drag-handle">
              <i className="fa-solid fa-up-down-left-right"></i>
            </p>
          </div>
          {tasks.map((task, index) => (
            <div
              key={index}
              className="calendar-task-item"
              onDoubleClick={() => deleteTask(index)}
            >
              {task}
            </div>
          ))}
          <div className="calendar-input-task">
            {showInput && (
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            )}
          </div>
          <p className="add-icon" onClick={handleAddButtonClick}>
            <i className="fa-solid fa-plus"></i> Add
          </p>
        </div>
      </Draggable>
    </div>
  );
};

export default Calendar;
