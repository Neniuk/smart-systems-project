import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import WeatherCard from "../../components/WeatherCard";
import ExploreCard from "../../components/ExploreCard";
import ForecastCard from "../../components/ForecastCard";
import LocationSearchBar from "../../components/LocationSearchBar"; // Make sure the import matches the renamed file
import getWeather from "../../api/getWeather";
import Location from "../../models/Location";
import BackgroundImage from "../../components/BackgroundImage";

type HomePageProps = {
    weather?: object;
    location?: Location;
};

// TODO: Add forecast prop and add forecast to App.tsx
const HomePage = (props: HomePageProps) => {
    console.log(props);
    const [selectedForecast, setSelectedForecast] = useState<string>("weekly");
    return (
        <div className="from-backgroundPrimary to-backgroundSecondary min-h-screen bg-gradient-to-b">
            <div className="content text-textLight flex flex-col items-center justify-center gap-8 pt-16">
                <LocationSearchBar />
                <WeatherCard
                    location={props.location}
                    weatherData={props.weather}
                />
                <Link to="/activities">
                    <ExploreCard />
                </Link>
                <ForecastCard selectedForecast={selectedForecast} />
            </div>
        </div>
    );
};

export default HomePage;
