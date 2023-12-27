import React, { useEffect, useState } from "react";

import HamburgerButton from "../../components/HamburgerButton";
import WeatherCard from "../../components/WeatherCard";
import ExploreCard from "../../components/ExploreCard";
import ForecastCard from "../../components/ForecastCard";

import getWeather from "../../api/weather";

import Location from "../../models/Location";

const HomePage = () => {
    const [location, setLocation] = useState<Location | undefined>(undefined);
    const [weatherData, setWeatherData] = useState<object | undefined>(
        undefined
    );

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

                    console.log("Location retrieved successfully");

                    getWeather(location).then((weatherData) => {
                        // console.log(weatherData);
                        setWeatherData(weatherData);
                    });
                },
                (error) => {
                    console.error("Error retrieving geolocation data", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser");
        }
    }, []);

    // if (location) {
    //     console.log(JSON.stringify(location));
    // }

    return (
        <div>
            <div className="flex flex-col items-center justify-center pt-16">
                <HamburgerButton />
                <WeatherCard location={location} weatherData={weatherData} />
                <ExploreCard />
                <ForecastCard />
            </div>
        </div>
    );
};

export default HomePage;
