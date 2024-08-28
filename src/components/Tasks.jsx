import React, { useState, useEffect } from "react";
import "./Tasks.css";
import Draggable from "react-draggable";

const Tasks = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <div className={`tasks-container ${visible ? "visible" : ""}`}>
      <Draggable handle=".drag-handle">
        <div className="tasks-content">
          <p className="drag-handle">
            <i className="fa-solid fa-up-down-left-right"></i>
          </p>
          <p>
            <input type="checkbox" name="checkbox" className="checkbox" />
            Click on the text
          </p>
          <p>
            <input type="checkbox" name="checkbox" className="checkbox" />
            To change the text
          </p>
          <p>
            <input type="checkbox" name="checkbox" className="checkbox" />
            Click on the text
          </p>
          <p>
            <input type="checkbox" name="checkbox" className="checkbox" />
            To change the text
          </p>
        </div>
      </Draggable>
    </div>
  );
};

export default Tasks;
