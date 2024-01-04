import React, { Component } from "react";

import Location from "../../models/Location";
import Weather from "../../models/Weather";

import getWeather from "../../api/getWeather";

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
        const locationName: string = weatherData?.weather.name;

        const weatherDescription: string =
            weatherData?.weather.weather[0].description;

        const tempKelvin: number = weatherData?.weather.main.temp;
        const tempCelsius: number = tempKelvin - 273.15;

        const minTempKelvin: number = weatherData?.weather.main.temp_min;
        const minTempCelsius: number = minTempKelvin - 273.15;

        const maxTempKelvin: number = weatherData?.weather.main.temp_max;
        const maxTempCelsius: number = maxTempKelvin - 273.15;

        const windSpeed: number = weatherData?.weather.wind.speed;

        // TODO: Make a button to refresh the weather data
        return (
            // TODO: Adjust card background gradient to match the figma design
            <div className="min-w-95% sm:min-w-128 sm:max-w-128 max-w-95% shadow-outer from-mainCardPrimary via-mainCardPrimary to-mainCardSecondary flex flex-row justify-between rounded-2xl bg-gradient-to-l p-4">
                <div className="text-left">
                    <h1 className="text-3xl">{locationName}</h1>
                    <h2 className="text-textLightSecondary">
                        {weatherDescription}
                    </h2>
                    <h2 className="text-textLightSecondary">
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
