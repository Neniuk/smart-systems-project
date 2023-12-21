import React, { Component } from "react";
import "./styles.css";

class WeatherCard extends Component {
	render() {
		return (
			<div className="weather-card">
				<div className="weather-card-left-column"></div>
				<div className="weather-card-right-column"></div>
			</div>
		);
	}
}

export default WeatherCard;
