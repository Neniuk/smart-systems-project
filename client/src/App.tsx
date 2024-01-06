// References:
// - https://reactrouter.com/en/main/start/overview
// - https://youtu.be/Ul3y1LXxzdU?si=thVgQljPJao9XeYo
import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import getWeather from "./api/getWeather";
import getLocation from "./api/getLocation";
import Location from "./models/Location";

import HomePage from "./pages/HomePage";
import ClothesPage from "./pages/ClothesPage";
import PageNotFoundPage from "./pages/PageNotFoundPage";
import getHourlyWeather from "./api/getHourlyWeather";
import { get } from "http";

// TODO: Cleanup the useEffects
function App() {
    const [location, setLocation] = useState<Location | undefined>(undefined);
    const [weather, setWeather] = useState<
        { weather: object; time: number } | undefined
    >(undefined);
    const [forecast, setForecast] = useState<
        { forecast: object; time: number } | undefined
    >(undefined);
    const [selectedForecast, setSelectedForecast] = useState<string>("weekly");

    // Gets location data on first render
    useEffect(() => {
        getLocation()
            .then((locationData) => {
                if (locationData) {
                    setLocation(locationData);
                }
            })
            .catch((error) => {
                console.error("Failed to get location", error);
            });
    }, []);

    // Gets weather data when location data is fetched
    // TODO: Update useEffect to also fetch forecast data and
    // update the Weather.ts type to include forecast data
    useEffect(() => {
        if (location) {
            const timestamp = new Date().getTime();
            getWeather(location).then((data) => {
                if (data) {
                    setWeather({ weather: data, time: timestamp });

                    localStorage.setItem("weather", JSON.stringify(weather));
                    // console.log("Weather data:", data);
                }
            });
            getHourlyWeather(location).then((data) => {
                if (data) {
                    setForecast({ forecast: data, time: timestamp });

                    localStorage.setItem("forecast", JSON.stringify(forecast));
                    // console.log("Forecast data:", data);
                }
            });
        }
    }, [location]);

    // Updates weather and location data every hour, or if it's not yet fetched
    // Checked every minute
    // TODO: Update useEffect to also fetch forecast data
    useEffect(() => {
        const interval = setInterval(
            () => {
                const currentTime = new Date().getTime();
                if (
                    !weather ||
                    !location ||
                    currentTime - weather.time > 3600000 ||
                    currentTime - location.time > 3600000

                    // Ten second interval for testing
                    // currentTime - weather.time > 10000 ||
                    // currentTime - location.time > 10000
                ) {
                    // If the weather or location data is over an hour old, or not yet fetched, refetch both
                    console.log("Refetching weather and location data");
                    getLocation()
                        .then((locationData) => {
                            if (locationData) {
                                setLocation(locationData);

                                getWeather(locationData).then((weatherData) => {
                                    if (weatherData) {
                                        setWeather({
                                            weather: weatherData,
                                            time: currentTime,
                                        });
                                    }
                                });
                            }
                        })
                        .catch((error) => {
                            console.error("Failed to get location", error);
                        });
                }
            },
            // Ten second interval for testing
            // 10000

            // Check every minute
            60000
        );

        return () => clearInterval(interval); // Clean up on component unmount
    }, [location, weather]);

    return (
        <Routes>
            <Route
                path="/"
                element={<HomePage {...{ location, weather, forecast }} />}
            />
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
