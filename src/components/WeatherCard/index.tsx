import React, { Component } from "react";
import "./styles.css";

type WeatherProp = {
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

type WeatherCardProps = {
	location: object;
};

class WeatherCard extends Component<WeatherCardProps> {
	render() {
		const { location } = this.props;
		return (
			<div className="flex flex-row justify-between max-w-95% mx-auto mt-4 sm:max-w-96 bg-sky-300 rounded-2xl p-4 text-white">
				<div className="">
					<div className="text-left">
						<h1 className="text-3xl">Lahti</h1>
					</div>
					<div className="text-sky-100">
						<h2>Partly Cloudy</h2>
					</div>
					<div className="text-sky-100">
						<h2>-12°C / -6°C</h2>
					</div>
				</div>
				<div className="text-right">
					<div className="">
						<h1 className="text-4xl">-11°C</h1>
					</div>
					<div className="">
						<h2>Wind speed: 3.7 m/s</h2>
					</div>
				</div>
			</div>
		);
	}
}

export default WeatherCard;
