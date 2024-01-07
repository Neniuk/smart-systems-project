// LocationSearchBarCard.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./LocationSearchBar.css";
import Location from "../../models/Location";

type LocationSearchBarProps = {
    location?: Location;
    setLocation: (location: Location) => void;
};

const LocationSearchBar: React.FC<LocationSearchBarProps> = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const [currentLocation, setCurrentLocation] = useState("Lahti");
    {
        /* the current location has to be changed to the location that the user's gps gives out*/
    }
    const [searchedLocation, setSearchedLocation] = useState("");
    const [recentLocations, setRecentLocations] = useState<string[]>([]);
    {
        /* tried to keep track of the recently searched cities by keeping them in an array and just pushing new searches in but 
  i can not really figure out how to write it properly without errors */
    }
    const LocationClick = (location: string) => {
        setCurrentLocation(location);
    };

    const SearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchedLocation(event.target.value);
    };

    const SearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setCurrentLocation(searchedLocation);
    };

    return (
        <div className="menu-container">
            <div
                className={`hamburger-icon ${
                    isOpen ? "hamburger-open" : "hamburger-closed"
                }`}
                onClick={toggleMenu}
            >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>

            <div
                className={`menu-content ${
                    isOpen ? "menu-open" : "menu-closed"
                }`}
            >
                <div className="title-container">
                    <h1 className="weather-planner-title">Weather Planner</h1>
                </div>

                <div className="current-location">
                    <span className="current-location-text">
                        Current location:
                    </span>
                    <span className="current-locationLahti">
                        {currentLocation}
                    </span>
                </div>

                <div className="search-section">
                    <form onSubmit={SearchSubmit}>
                        <input
                            type="text"
                            value={searchedLocation}
                            onChange={SearchInputChange}
                        />
                        <button type="submit">Search</button>
                    </form>
                </div>

                <div className="recent-locations">
                    <span className="recent-locations-text">
                        Recently searched:
                    </span>
                    <div
                        className="location"
                        onClick={() => LocationClick("Vantaa")}
                    >
                        Vantaa
                    </div>
                    <div
                        className="location"
                        onClick={() => LocationClick("Oulu")}
                    >
                        Oulu
                    </div>
                    <div
                        className="location"
                        onClick={() => LocationClick("Lappeenranta")}
                    >
                        Lappeenranta
                    </div>
                    <div
                        className="location"
                        onClick={() => LocationClick("Hämeenlinna")}
                    >
                        Hämeenlinna
                    </div>
                    <div
                        className="location"
                        onClick={() => LocationClick("Helsinki")}
                    >
                        Helsinki
                    </div>
                </div>
                {/* the location will be changed now on click - either from the recently searched ones or from the searched on the spot ones when clicked on 'search' button */}

                {/*Forwards the user to the correct page when they click on the options
                 */}
                <div
                    className="menu-options"
                    style={{ display: "flex", flexDirection: "column" }}
                >
                    <Link to="/">Home</Link>
                    <Link to="/activities">Activities</Link>
                    <Link to="/clothes">Clothes</Link>
                    <Link to="/settings">Settings</Link>
                </div>
            </div>
        </div>
    );
};

export default LocationSearchBar;
