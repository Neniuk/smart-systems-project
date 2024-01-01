// HomePage.tsx
import React, { useEffect, useState } from "react";
import "./HomePage.css";

import WeatherCard from "../../components/WeatherCard";
import ExploreCard from "../../components/ExploreCard";
import ForecastCard from "../../components/ForecastCard";
import LocationSearchBar from "../../components/LocationSearchBar"; // Make sure the import matches the renamed file
import getWeather from "../../api/weather";
import Location from "../../models/Location";
import BackgroundImage from "../../components/BackgroundImage";

type HomePageProps = {};

// TODO: Add props to component
const HomePage = () => {
    const [location, setLocation] = useState<Location | undefined>(undefined);
    const [weatherData, setWeatherData] = useState<object | undefined>(undefined);
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

    return (
        <BackgroundImage>

            <div className="content flex flex-col items-center justify-center gap-8 pt-16">
                <LocationSearchBar /> {/* Corrected the component name here */}
                <WeatherCard location={location} weatherData={weatherData} />
                <ExploreCard />
                <ForecastCard selectedForecast={selectedForecast} />
            </div>
        </BackgroundImage>
    );
};

export default HomePage;
