// SearchFilter.jsx
import React from "react";

const SearchFilter = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search characters..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchFilter;
