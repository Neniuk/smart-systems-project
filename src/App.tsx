import React, { useEffect, useState } from "react";
import "./App.css";

import WeatherCard from "./components/WeatherCard";
import ExploreCard from "./components/ExploreCard";
import HamburgerButton from "./components/HamburgerButton";

import Location from "./models/Location";

function App() {
    const [location, setLocation] = useState<Location | null>(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const location: Location = {
                        longitude: position.coords.longitude,
                        latitude: position.coords.latitude,
                    };
                    localStorage.setItem("location", JSON.stringify(location));
                    setLocation(location);
                },
                (error) => {
                    console.error("Error retrieving geolocation data", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser");
        }
    }, []);

    if (location) {
        console.log(JSON.stringify(location));
    }

    return (
        <div className="App">
            <div className="flex flex-col items-center justify-center pt-16">
                <HamburgerButton />
                <WeatherCard location={location || {}} />
                <ExploreCard />
            </div>
        </div>
    );
}

export default App;
