import React, { useState } from "react";
import { FaCheck, FaClock, FaTrash, FaEllipsisV, FaEdit, FaSave } from "react-icons/fa";
import "./TaskItem.css";

const TaskItem = ({ task, updateTaskStatus, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const [newDueDate, setNewDueDate] = useState(task.dueDate);
  const [showMenu, setShowMenu] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleEdit = () => {
    editTask(task.id, newText, newDueDate);
    setIsEditing(false);
  };

  const handleComplete = () => {
    setIsCompleted(true);
    setShowPopup(true);
    setTimeout(() => {
      updateTaskStatus(task.id, "completed");
      setIsCompleted(false);
      setShowPopup(false);
    }, 2000);
  };

  const handleDelete = () => {
    setIsDeleted(true);
    setTimeout(() => {
      deleteTask(task.id);
      setIsDeleted(false);
    }, 1000);
  };

  return (
    <div className={`task-item ${isCompleted ? "completed" : ""} ${isDeleted ? "deleted" : ""}`}>
      {isEditing ? (
        <div className="edit-container">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <input
            type="date"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
          />
          <button onClick={handleEdit}><FaSave /></button>
        </div>
      ) : (
        <div>
          <p>{task.text}</p>
          <small>Due: {task.dueDate || "No due date"}</small>
          <button onClick={() => setIsEditing(true)}><FaEdit /></button>
        </div>
      )}
      <div>
        <button onClick={() => setShowMenu(!showMenu)}><FaEllipsisV /></button>
        {showMenu && (
          <div className="task-menu">
            <button onClick={handleComplete} className="complete-icon"><FaCheck /></button>
            <button onClick={handleDelete} className="delete-icon"><FaTrash /></button>
          </div>
        )}
      </div>
      {showPopup && <div className="popup">Task Completed! 🎉</div>}
    </div>
  );
};

export default TaskItem;