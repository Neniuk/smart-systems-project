import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./LocationSearchBar.css";
import Location from "../../models/Location";
import getCity from "../../api/getCity";
import getCoordinates from "../../api/getCoordinates";
import { get } from "http";

type LocationSearchBarProps = {
    location?: Location;
    setLocation: (location: Location) => void;
};

// TODO: Update page navigation styling and add hover effects
const LocationSearchBar: React.FC<LocationSearchBarProps> = ({
    location,
    setLocation,
}) => {
    const [currentLocation, setCurrentLocation] = useState("");
    const [searchedLocation, setSearchedLocation] = useState("");
    const [recentLocations, setRecentLocations] = useState<string[]>([
        "Vantaa",
        "Oulu",
        "Lappeenranta",
        "Hämeenlinna",
        "Helsinki",
        "Lahti",
    ]);
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

    const SearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchedLocation(event.target.value);
    };

    const SearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const tmp = searchedLocation;
        setSearchedLocation("");

        getCoordinates(tmp).then((data) => {
            if (data) {
                setCurrentLocation(tmp);
                setRecentLocations([...recentLocations, tmp]);

                setLocation(data);
            }
        });
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

                <div className="search-section text-textDark">
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
                    {recentLocations.map((location, index) => (
                        <div
                            className="location cursor-pointer"
                            key={index}
                            onClick={() => handleLocationChange(location)}
                        >
                            {location}
                        </div>
                    ))}
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
