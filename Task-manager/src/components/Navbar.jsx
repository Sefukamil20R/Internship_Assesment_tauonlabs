// import React, { useState } from "react";

// const Navbar = ({ setFilter, setSearchTerm }) => {
//   const [isSortOpen, setIsSortOpen] = useState(false);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const options = ["All Tasks", "Pending Tasks", "Completed Tasks"];

//   const handleSortClick = (value) => {
//     setFilter(value.toLowerCase().replace(" ", ""));
//     setIsSortOpen(false);
//   };

//   const [isDarkMode, setIsDarkMode] = useState(
//     localStorage.getItem("theme") === "dark"
//   );

//   const toggleTheme = () => {
//     const newTheme = isDarkMode ? "light" : "dark";
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.setAttribute("data-theme", newTheme);
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <nav className="navbar">
//       {/* Title on the Left */}
//       <h1 className="app-title">Task Manager</h1>

//       {/* Search Bar Centered */}
//       <input
//         type="text"
//         placeholder="🔍 Search tasks..."
//         onChange={handleSearch}
//         className="search-bar"
//       />

//       {/* Theme & Sort on the Right */}
//       <div className="navbar-actions">
//         {/* ⬇️ Sort Dropdown with Arrow */}
//         <div
//           className="sort-dropdown"
//           onClick={() => setIsSortOpen(!isSortOpen)}
//         >
//           <span>Sort</span>
//           <span className="sort-arrow">▼</span>
//           {isSortOpen && (
//             <ul className="dropdown-menu">
//               {options.map((option) => (
//                 <li
//                   key={option}
//                   onClick={() => handleSortClick(option)}
//                 >
//                   {option}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* 🌙 Theme Toggle */}
//         <button className="theme-toggle" onClick={toggleTheme}>
//           <i
//             className={`fa-solid ${isDarkMode ? "fa-sun" : "fa-moon"}`}
//           ></i>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// src/components/Navbar.jsx

import React from "react";
import "./Navbar.css";

const Navbar = ({ setFilter, theme, setTheme }) => {
  return (
    <nav className="navbar">
      <div className="title">Task Manager</div>
      <input
        type="text"
        className="search-bar"
        placeholder="Search tasks..."
        onChange={(e) => setFilter(e.target.value.toLowerCase())}
      />
      <select className="filter-sort-dropdown" onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All Tasks</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
      <button className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
};

export default Navbar;
