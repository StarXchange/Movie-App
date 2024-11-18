import React from "react";

const Filter = ({
  filterTitle,
  setFilterTitle,
  filterRating,
  setfilterRating,
}) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={filterTitle}
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={filterRating}
        onChange={(e) => setfilterRating(e.target.value)}
      />
    </div>
  );
};

export default Filter;
