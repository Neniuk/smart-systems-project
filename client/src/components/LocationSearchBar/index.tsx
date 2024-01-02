// LocationSearchBarCard.tsx
import React, { useState } from 'react';
import './LocationSearchBar.css'; 

const LocationSearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      <div className={`hamburger-icon ${isOpen ? 'hamburger-open' : 'hamburger-closed'}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <div className={`menu-content ${isOpen ? 'menu-open' : 'menu-closed'}`}>
      <div className="title-container">
      <h1 className="weather-planner-title">
          <span className="arrow-icon">&#8592;</span> {/* This is the arrow icon */}
          Weather Planner
        </h1>
        </div>

        <div className="current-location">
          <span className="current-location-text">Current location:</span>
          <span className="current-locationLahti">Lahti</span>
        </div>
        
        <div className="search-section">
          <input type="text" placeholder="search location" />
        </div>
        
        <div className="recent-locations">
        <span className="recent-locations-text">Recently searched:</span>
          <div className="location">Vantaa</div>
          <div className="location">Oulu</div>
          <div className="location">Lappeenranta</div>
          <div className="location">Hämeenlinna</div>
          <div className="location">Helsinki</div>
        </div>

        <div className="menu-options">
          <div className="menu-options">ACTIVITIES</div>
          <div className="menu-options">SETTINGS</div>
          <div className="menu-options">SETTINGS</div>
          <div className="menu-options">HOME</div>
        </div>
        
      </div>
    </div>
  );
}

export default LocationSearchBar;
