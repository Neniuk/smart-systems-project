import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import WeatherCard from "../../components/WeatherCard";
import ExploreCard from "../../components/ExploreCard";
import ForecastCard from "../../components/ForecastCard";
import LocationSearchBar from "../../components/LocationSearchBar"; // Make sure the import matches the renamed file
import getWeather from "../../api/getWeather";
import Location from "../../models/Location";
import BackgroundImage from "../../components/BackgroundImage";
import PromptActivitiesCard from "../../components/PromptActivitiesCard";

type HomePageProps = {
    weather?: object;
    forecast?: object;
    location?: Location;
};

const HomePage = (props: HomePageProps) => {
    // console.log("HOME PAGE PROPS:", props);
    // console.log("HOME PAGE FORECAST:", props.forecast);
    const [selectedForecast, setSelectedForecast] = useState<string>("weekly");
    return (
        <div className="from-backgroundPrimary to-backgroundSecondary min-h-screen bg-gradient-to-b">
            <div className="content text-textLight flex flex-col items-center justify-center gap-8 pt-16">
                {/* <LocationSearchBar /> */}
                <WeatherCard
                    location={props.location}
                    weatherData={props.weather}
                />
                <Link to="/activities">
                    <ExploreCard />
                </Link>
                <PromptActivitiesCard
                    location={props.location}
                    weather={props.weather}
                />
                <ForecastCard
                    selectedForecast={selectedForecast}
                    forecast={props.forecast}
                />
            </div>
        </div>
    );
};

export default HomePage;
