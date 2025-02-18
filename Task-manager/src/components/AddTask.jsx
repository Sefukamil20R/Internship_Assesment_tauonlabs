import React, { useState } from "react";
import { FaCalendarAlt, FaRedo } from "react-icons/fa";

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [showDueOptions, setShowDueOptions] = useState(false);
  const [showRepeatOptions, setShowRepeatOptions] = useState(false);
  const [dueDate, setDueDate] = useState("Today");
  const [repeat, setRepeat] = useState("None");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      dueDate,
      repeat,
      completed: false,
    };

    addTask((prevTasks) => [...prevTasks, newTask]);
    setTitle("");
    setDueDate("Today");
    setRepeat("None");
    setShowOptions(false);
  };

  return (
    <div className="add-task-container">
      <div
        className="task-input-container"
        onClick={() => setShowOptions(true)}
      >
        <span className="circle-icon">+</span>
        <input
          type="text"
          placeholder="Add a task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="task-input"
        />
      </div>

      {showOptions && (
        <div className="task-options">
          <div className="task-actions">
            <div className="left-icons">
              <FaCalendarAlt
                className="icon"
                onClick={() => {
                  setShowDueOptions(!showDueOptions);
                  setShowRepeatOptions(false);
                }}
              />
              <FaRedo
                className="icon"
                onClick={() => {
                  setShowRepeatOptions(!showRepeatOptions);
                  setShowDueOptions(false);
                }}
              />
            </div>
            <button className="add-button" onClick={handleSubmit}>
              Add
            </button>
          </div>

          {showDueOptions && (
            <div className="dropdown-container">
              <h4>Due</h4>
              <select
                className="dropdown"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              >
                <option value="Today">Today</option>
                <option value="Tomorrow">Tomorrow</option>
                <option value="Pick a Date">Pick a Date</option>
              </select>
              {dueDate === "Pick a Date" && (
                <input type="date" className="date-picker" />
              )}
            </div>
          )}

          {showRepeatOptions && (
            <div className="dropdown-container">
              <h4>Repeat</h4>
              <select
                className="dropdown"
                value={repeat}
                onChange={(e) => setRepeat(e.target.value)}
              >
                <option value="None">None</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AddTask;