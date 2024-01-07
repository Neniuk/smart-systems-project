import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import WeatherCard from "../../components/WeatherCard";
import ExploreCard from "../../components/ExploreCard";
import ForecastCard from "../../components/ForecastCard";
import LocationSearchBar from "../../components/LocationSearchBar"; // Make sure the import matches the renamed file
import getWeather from "../../api/getWeather";
import Location from "../../models/Location";
import BackgroundImage from "../../components/BackgroundImage";

type ActivitiesPageProps = {
    weather?: object;
    forecast?: object;
    location?: Location;
};

const ActivitiesPage = (props: ActivitiesPageProps) => {
    return (
        <div className="from-backgroundPrimary to-backgroundSecondary min-h-screen bg-gradient-to-b">
            <div className="content text-textLight flex flex-col items-center justify-center gap-8 pt-16"></div>
        </div>
    );
};

export default ActivitiesPage;
