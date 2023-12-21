import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import WeatherCard from "./components/WeatherCard";

function App() {
	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			const { latitude, longitude } = position.coords;
			localStorage.setItem(
				"location",
				JSON.stringify({ latitude, longitude })
			);
		});
	}, []);

	const location = JSON.parse(localStorage.getItem("location") || "{}");

	return (
		<div className="App">
			<WeatherCard location={location} />
		</div>
	);
}

export default App;
