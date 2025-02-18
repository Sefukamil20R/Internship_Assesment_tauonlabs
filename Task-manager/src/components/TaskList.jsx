// import React from "react";
// import TaskItem from "./TaskItem";

// const TaskList = ({ tasks, updateTask }) => {
//   return (
//     <ul className="task-list">
//       {tasks.map((task) => (
//         <TaskItem key={task.id} task={task} updateTask={updateTask} />
//       ))}
//     </ul>
//   );
// };

// export default TaskList;
// src/components/TaskList.jsx
import React from "react";
import TaskItem from "./TaskItem";
import "./TaskList.css";

const TaskList = ({ tasks, filter, updateTaskStatus, deleteTask, editTask }) => {
  const filteredTasks = tasks.filter(task => {
    if (filter === "all") return true;
    if (filter === "pending") return task.status === "pending";
    if (filter === "completed") return task.status === "completed";
    return task.text.toLowerCase().includes(filter);
  });

  return (
    <div className="task-list">
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} updateTaskStatus={updateTaskStatus} deleteTask={deleteTask} editTask={editTask} />
      ))}
    </div>
  );
};

export default TaskList;