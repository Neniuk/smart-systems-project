import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./LocationSearchBar.css";
import Location from "../../models/Location";
import getCity from "../../api/getCity";
import getCoordinates from "../../api/getCoordinates";

type LocationSearchBarProps = {
    location?: Location;
    setLocation: (location: Location) => void;
};

const LocationSearchBar: React.FC<LocationSearchBarProps> = ({
    location,
    setLocation,
}) => {
    const [currentLocation, setCurrentLocation] = useState("");
    const [searchedLocation, setSearchedLocation] = useState("");
    const [recentLocations, setRecentLocations] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (location) {
            getCity(location).then((data) => {
                if (data) {
                    // console.log("Searchbar City", data);
                    setCurrentLocation(data);
                }
            });
        }
    }, [location]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    {
        /* tried to keep track of the recently searched cities by keeping them in an array and just pushing new searches in but 
  i can not really figure out how to write it properly without errors */
    }

    const SearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchedLocation(event.target.value);
    };

    const SearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setCurrentLocation(searchedLocation);
    };

    const handleLocationChange = (city: string) => {
        getCoordinates(city).then((data) => {
            if (data) {
                // console.log("LocationSearchBar", data);
                setLocation(data);
            }
        });
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
                        onClick={() => handleLocationChange("Vantaa")}
                    >
                        Vantaa
                    </div>
                    <div
                        className="location"
                        onClick={() => handleLocationChange("Oulu")}
                    >
                        Oulu
                    </div>
                    <div
                        className="location"
                        onClick={() => handleLocationChange("Lappeenranta")}
                    >
                        Lappeenranta
                    </div>
                    <div
                        className="location"
                        onClick={() => handleLocationChange("Hämeenlinna")}
                    >
                        Hämeenlinna
                    </div>
                    <div
                        className="location"
                        onClick={() => handleLocationChange("Helsinki")}
                    >
                        Helsinki
                    </div>
                </div>
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
