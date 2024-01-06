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

        const timestamp: number = weatherData?.time;
        // Timestamp to readable date and time
        const datetime = timestamp ? new Date(timestamp) : undefined;

        // TODO: Make a button to refresh the weather data
        return (
            <div className="min-w-95% sm:min-w-128 sm:max-w-128 max-w-95% from-mainCardPrimary via-mainCardPrimary to-mainCardSecondary relative flex flex-row justify-between overflow-hidden rounded-2xl bg-gradient-to-l p-4">
                <div className="absolute inset-0 bg-black opacity-5"></div>
                <div className="z-10 text-left">
                    <h1 className="text-3xl">{locationName || "Loading..."}</h1>
                    <h2 className="text-textLightSecondary">
                        {weatherDescription || "Loading..."}
                    </h2>
                    <h2 className="text-textLightSecondary">
                        {minTempCelsius && maxTempCelsius
                            ? `${Math.round(minTempCelsius)}°C / ${Math.round(
                                  maxTempCelsius
                              )}°C`
                            : "Loading..."}
                    </h2>
                </div>
                <div className="z-10 text-right">
                    <h1 className="text-4xl">
                        {tempCelsius
                            ? `${Math.round(tempCelsius)}°C`
                            : "Loading..."}
                    </h1>
                    <h2 className="text-textLightSecondary">
                        {windSpeed ? `${windSpeed} m/s` : "Loading..."}
                    </h2>
                    <h2 className="text-textLightTertiary">
                        {datetime
                            ? `Updated: ${datetime.toLocaleString()}`
                            : "Loading..."}
                    </h2>
                </div>
            </div>
        );
    }
}

export default WeatherCard;
