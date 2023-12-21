import React, { useEffect } from "react";
import "./App.css";

import WeatherCard from "./components/WeatherCard";
import ExploreCard from "./components/ExploreCard";

import Location from "./models/Location";

function App() {
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const location: Location = {
                longitude: position.coords.longitude,
                latitude: position.coords.latitude,
            };
            localStorage.setItem("location", JSON.stringify(location));
        });
    }, []);

    const location: Location = JSON.parse(
        localStorage.getItem("location") || "{}"
    );

    return (
        <div className="App">
            <WeatherCard location={location} />
            <ExploreCard />
        </div>
    );
}

export default App;
