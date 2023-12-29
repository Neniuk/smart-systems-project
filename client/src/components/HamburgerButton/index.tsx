import React, { useState, ChangeEvent } from 'react';
import './HamburgerButton.css'; // Make sure the path is correct based on your file structure

function HamburgerButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
      <button className="toggleButton" onClick={() => setIsExpanded(!isExpanded)}>☰</button>
      {isExpanded && (
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className="searchBar"
          placeholder="Search..."
        />
      )}
    </div>
  );
}

export default HamburgerButton;
