// import React, { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import AddTask from "./components/AddTask";
// import TaskList from "./components/TaskList";
// import "./index.css";
// import { getTasksFromLocalStorage, saveTasksToLocalStorage } from "./utils/LocalStorage";

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [filter, setFilter] = useState("all");
//   const [searchTerm, setSearchTerm] = useState("");

//   // Load tasks from local storage on mount
//   useEffect(() => {
//     const storedTasks = getTasksFromLocalStorage();
//     if (storedTasks) {
//       setTasks(storedTasks);
//     }
//   }, []);

//   // Save tasks to local storage whenever tasks change
//   useEffect(() => {
//     saveTasksToLocalStorage(tasks);
//   }, [tasks]);

//   // Filter tasks based on selected option and search term
//   const filteredTasks = tasks
//     .filter((task) =>
//       task.title.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .filter((task) => {
//       if (filter === "all") return true;
//       if (filter === "completed") return task.completed;
//       if (filter === "pending") return !task.completed;
//       return false;
//     });

//   return (
//     <div className="app-container">
//       <Navbar
//         setFilter={setFilter}
//         setSearchTerm={setSearchTerm}
//       />
//       <div className="content-container">
//         <AddTask addTask={setTasks} />
//         <TaskList tasks={filteredTasks} updateTask={setTasks} />
//       </div>
//     </div>
//   );
// }

// export default App;
// src/App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTaskStatus = (id, status) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newText, newDueDate) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText, dueDate: newDueDate } : task));
  };

  return (
    <div className="app">
      <Navbar setFilter={setFilter} theme={theme} setTheme={setTheme} />
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} filter={filter} updateTaskStatus={updateTaskStatus} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
};

export default App;
