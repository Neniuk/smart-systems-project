import React, { useEffect, useState } from "react";
import "./HomePage.css";

import HamburgerButton from "../../components/HamburgerButton";
import WeatherCard from "../../components/WeatherCard";
import ExploreCard from "../../components/ExploreCard";
import ForecastCard from "../../components/ForecastCard";

import Sidebar from "../../components/Sidebar";
import LocationSearchbar from "../../components/Sidebar/LocationSearchbar";
import getWeather from "../../api/weather";
import Location from "../../models/Location";
import BackgroundImage from "../../components/BackgroundImage";

type HomePageProps = {};

// TODO: Add props to component
const HomePage = () => {
    const [location, setLocation] = useState<Location | undefined>(undefined);
    const [weatherData, setWeatherData] = useState<object | undefined>(
        undefined
    );
    const [selectedForecast, setSelectedForecast] = useState<string>("weekly");

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
                    getWeather(location).then((data) => {
                        setWeatherData(data);
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

    // Wrap your components with a 'content' div to separate them from the BackgroundImage
    return (
        <BackgroundImage>
            <div className="content flex flex-col items-center justify-center gap-8 pt-16">
                <HamburgerButton />
                <WeatherCard location={location} weatherData={weatherData} />
                <ExploreCard />
                <ForecastCard selectedForecast={selectedForecast} />
            </div>
        </BackgroundImage>
    );
};

export default HomePage;
