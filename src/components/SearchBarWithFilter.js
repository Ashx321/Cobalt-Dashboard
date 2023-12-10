import React, { useState } from 'react';

const SearchBarWithFilter = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State for the search term

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button className="filter-icon">
        {/* Your filter icon component or SVG here */}
      </button>
    </div>
  );
};

export default SearchBarWithFilter;
