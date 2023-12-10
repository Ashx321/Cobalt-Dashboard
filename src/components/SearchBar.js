import React from 'react';
import Filter from '../assets/filter.svg';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." className="search-input"/>
      <button className="search-button"><img src={Filter} alt="filter" className="filter-icon"/>Filter</button>
    </div>
  );
}

export default SearchBar;

