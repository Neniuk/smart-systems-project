import React, { Component } from "react";
import "./styles.css";

// import Location from "../../models/Location";
// import Weather from "../../models/Weather";

type WeatherCardProps = {
    location: object;
};

class WeatherCard extends Component<WeatherCardProps> {
    render() {
        const { location } = this.props;
        return (
            <div className="mx-auto mt-4 flex max-w-95% flex-row justify-between rounded-2xl bg-sky-300 p-4 text-white sm:max-w-96">
                <div className="text-left">
                    <h1 className="text-3xl">Lahti</h1>
                    <h2 className="text-sky-100">Partly Cloudy</h2>
                    <h2 className="text-sky-100">-12°C / -6°C</h2>
                </div>
                <div className="text-right">
                    <h1 className="text-4xl">-11°C</h1>
                    <h2 className="text-sky-100">Wind speed: 3.7 m/s</h2>
                </div>
            </div>
        );
    }
}

export default WeatherCard;
