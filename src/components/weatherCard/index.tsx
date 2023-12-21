import React, { Component } from "react";
import "./styles.css";

type LocationWeather = {
	location: string;
	currentTemperature: number;
	minimumTemperature: number;
	maximumTemperature: number;
	humidity: number;
	windSpeed: number;
	weather: string;
	weatherDescription: string;
	weatherIcon: string;
};

class WeatherCard extends Component {
	render() {
		return (
			<div className="flex flex-row justify-between max-w-95% mx-auto mt-4 sm:max-w-96 bg-sky-300 rounded-2xl p-4 text-white">
				<div className="weather-card-left-column">
					<div className="weather-location">
						<h1>City, Country</h1>
					</div>
					<div className="weather-description">
						<h2>Weather description</h2>
					</div>
					<div className="weather-temperature-min-max">
						<h2>Min: 0°C</h2>
						<h2>Max: 0°C</h2>
					</div>
				</div>
				<div className="weather-card-right-column">
					<div className="weather-temperature">
						<h1>0°C</h1>
					</div>
					<div className="weather-wind-speed">
						<h2>Wind speed: 0 m/s</h2>
					</div>
				</div>
			</div>
		);
	}
}

export default WeatherCard;
