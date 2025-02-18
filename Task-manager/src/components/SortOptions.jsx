import React from "react";

const SortOptions = ({ setFilter }) => {
  return (
    <div className="sort-options">
      <button onClick={() => setFilter("all")}>All Tasks</button>
      <button onClick={() => setFilter("pending")}>Pending Tasks</button>
      <button onClick={() => setFilter("completed")}>Completed Tasks</button>
    </div>
  );
};

export default SortOptions;