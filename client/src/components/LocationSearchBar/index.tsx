// LocationSearchBarCard.tsx
import React, { useState } from 'react';
import './LocationSearchBar.css'; // Ensure this is the correct path to your CSS file

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
        <div className="search-section">
          <input type="text" placeholder="search location" />
        </div>
        <div className="current-location">
          <span className="current-location-text">Current location</span>
          <div className="current-location">Lahti</div>
        </div>
        <div className="recent-locations">
          <span className="recent-locations-text">Recent locations</span>
          <div className="location">Lappeenranta</div>
          <div className="location">Oulu</div>
          <div className="location">Lappeenranta</div>
          <div className="location">Hämeenlinna</div>
          <div className="location">Helsinki</div>
        </div>
        <button className="manage-locations">Manage locations</button>
      </div>
    </div>
  );
}

export default LocationSearchBar;
