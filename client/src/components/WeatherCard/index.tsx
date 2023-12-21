import React, { Component } from "react";
import "./styles.css";

import Location from "../../models/Location";
import Weather from "../../models/Weather";

import getWeather from "../../api/weather";

type WeatherCardProps = {
    location?: Location;
    weatherData?: any;
};

class WeatherCard extends Component<WeatherCardProps> {
    render() {
        const { location, weatherData } = this.props;

        // if (location && weatherData) {
        //     console.log("WeatherCard props:");
        //     console.log(location);
        //     console.log(weatherData);
        // }

        // TODO: Could mby make a type for these?
        const locationName: string = weatherData?.name;

        const weatherDescription: string = weatherData?.weather[0].description;

        const tempKelvin: number = weatherData?.main.temp;
        const tempCelsius: number = tempKelvin - 273.15;

        const minTempKelvin: number = weatherData?.main.temp_min;
        const minTempCelsius: number = minTempKelvin - 273.15;

        const maxTempKelvin: number = weatherData?.main.temp_max;
        const maxTempCelsius: number = maxTempKelvin - 273.15;

        const windSpeed: number = weatherData?.wind.speed;

        // TODO: Make a button to refresh the weather data
        return (
            <div className="min-w-95% sm:min-w-128 sm:max-w-128 max-w-95% mt-8 flex flex-row justify-between rounded-2xl bg-sky-300 p-4 text-white">
                <div className="text-left">
                    <h1 className="text-3xl">{locationName}</h1>
                    <h2 className="text-sky-100">{weatherDescription}</h2>
                    <h2 className="text-sky-100">
                        {Math.round(minTempCelsius)}°C /{" "}
                        {Math.round(maxTempCelsius)}°C
                    </h2>
                </div>
                <div className="text-right">
                    <h1 className="text-4xl">{Math.round(tempCelsius)}°C</h1>
                    <h2 className="text-sky-100">
                        Wind speed: {windSpeed} m/s
                    </h2>
                </div>
            </div>
        );
    }
}

export default WeatherCard;
