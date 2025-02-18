import React, { useState } from "react";
import "./TaskInput.css";

const TaskInput = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      addTask({ id: Date.now(), text: taskText, dueDate, status: "pending" });
      setTaskText("");
      setDueDate("");
      setShowOptions(false);
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        onFocus={() => setShowOptions(true)}
      />
      {showOptions && (
        <div className="task-options">
          <button onClick={() => document.getElementById("due-date").showPicker()}>📅</button>
          <input
            type="date"
            id="due-date"
            style={{ display: "none" }}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button className="add-task-button" onClick={handleAddTask}>Add Task</button>
        </div>
      )}
    </div>
  );
};

export default TaskInput;