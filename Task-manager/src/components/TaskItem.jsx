// import React, { useState } from "react";

// const TaskItem = ({ task, updateTask }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleCompletion = () => {
//     updateTask((prevTasks) =>
//       prevTasks.map((t) =>
//         t.id === task.id ? { ...t, completed: !t.completed } : t
//       )
//     );
//   };

//   const removeTask = () => {
//     updateTask((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
//   };

//   return (
//     <li className="task-item">
//       <div className="task-content">
//         <input
//           type="checkbox"
//           checked={task.completed}
//           onChange={toggleCompletion}
//           className="task-checkbox"
//         />
//         <span className={`task-title ${task.completed ? "completed" : ""}`}>
//           {task.title}
//         </span>
//         <span className="task-due">{task.dueDate}</span>
//       </div>
//       <div className="task-actions">
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="menu-button"
//         >
//           ...
//         </button>
//         {isMenuOpen && (
//           <ul className="action-menu">
//             <li onClick={toggleCompletion}>Mark as Completed</li>
//             <li onClick={removeTask}>Remove</li>
//           </ul>
//         )}
//       </div>
//     </li>
//   );
// };

// export default TaskItem;
import React, { useState } from "react";
import "./TaskItem.css";

const TaskItem = ({ task, updateTaskStatus, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const [newDueDate, setNewDueDate] = useState(task.dueDate);
  const [showMenu, setShowMenu] = useState(false);

  const handleEdit = () => {
    editTask(task.id, newText, newDueDate);
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <div>
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
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div>
          <p>{task.text}</p>
          <small>Due: {task.dueDate || "No due date"}</small>
          <button onClick={() => setIsEditing(true)}>✏️</button>
        </div>
      )}
      <div>
        <button onClick={() => setShowMenu(!showMenu)}>☰</button>
        {showMenu && (
          <div className="task-menu">
            <button onClick={() => updateTaskStatus(task.id, "completed")}>✅</button>
            <button onClick={() => updateTaskStatus(task.id, "pending")}>⏳</button>
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskItem;