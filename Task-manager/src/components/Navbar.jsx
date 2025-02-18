import React from "react";
import { FaSearch, FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ setFilter, theme, setTheme }) => {
  return (
    <nav className="navbar">
      <div className="title">Task Manager</div>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          className="search-bar"
          placeholder="Search tasks..."
          onChange={(e) => setFilter(e.target.value.toLowerCase())}
        />
      </div>
      <div className="navbar-right">
        <select className="filter-sort-dropdown" onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
        <button className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;