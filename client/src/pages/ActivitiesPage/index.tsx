import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import WeatherCard from "../../components/WeatherCard";
import ExploreCard from "../../components/ExploreCard";
import ForecastCard from "../../components/ForecastCard";
import LocationSearchBar from "../../components/LocationSearchBar"; // Make sure the import matches the renamed file
import getWeather from "../../api/getWeather";
import Location from "../../models/Location";
import BackgroundImage from "../../components/BackgroundImage";

import CarouselCard from "../../components/CarouselCard";
import "./index.css";

type ActivitiesPageProps = {
    weather?: any;
    forecast?: object;
    location?: Location;
};

const ActivitiesPage = (props: ActivitiesPageProps) => {
    const currentTempKelvin: number = props.weather?.weather.main.temp;
    const currentTempCelsius: number = currentTempKelvin - 273.15;

    const minTempKelvin: number = props.weather?.weather.main.temp_min;
    const minTempCelsius: number = minTempKelvin - 273.15;

    const maxTempKelvin: number = props.weather?.weather.main.temp_max;
    const maxTempCelsius: number = maxTempKelvin - 273.15;
    console.log("MIN/MAX TEMPERATURES:", minTempCelsius, maxTempCelsius)
    return (
        <div className="activities-container">
            <div>
                <CarouselCard 
                maxTempCelsius={maxTempCelsius}
                minTempCelsius={minTempCelsius}/>
            </div>
        </div>
    );
};

export default ActivitiesPage;
