// References:
// - https://reactrouter.com/en/main/start/overview
// - https://youtu.be/Ul3y1LXxzdU?si=thVgQljPJao9XeYo
import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import getWeather from "./api/getWeather";
import Location from "./models/Location";

import HomePage from "./pages/HomePage";
import ClothesPage from "./pages/ClothesPage";
import PageNotFoundPage from "./pages/PageNotFoundPage";

function App() {
    const [location, setLocation] = useState<Location | undefined>(undefined);
    const [weather, setWeather] = useState<
        { weather: object; time: number } | undefined
    >(undefined);
    const [selectedForecast, setSelectedForecast] = useState<string>("weekly");

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const locationData: Location = {
                        longitude: position.coords.longitude,
                        latitude: position.coords.latitude,
                    };

                    const timestamp = new Date().getTime();

                    localStorage.setItem("location", JSON.stringify(location));
                    setLocation(locationData);
                    if (location) {
                        getWeather(location).then((data) => {
                            if (data) {
                                setWeather({ weather: data, time: timestamp });

                                localStorage.setItem(
                                    "weather",
                                    JSON.stringify(weather)
                                );
                            }
                        });
                    }
                },
                (error) => {
                    console.error("Error retrieving geolocation data", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser");
        }
    }, []);

    return (
        <Routes>
            <Route path="/" element={<HomePage {...{ location, weather }} />} />
            <Route path="/activities" element={<h1>Activities</h1>} />
            <Route
                path="/clothes"
                element={<ClothesPage {...{ location, weather }} />}
            />
            <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
    );
}

export default App;
