import React, { Component } from "react";

const ForecastTopBar = () => {
    return (
        <div className="flex flex-row gap-56">
            <h1 className="text-black">Weekly Forecast</h1>
            <h1 className="text-black">Hourly Forecast</h1>
        </div>
    );
};

const Forecast = () => {
    return (
        <div>
            <h1>Forecast</h1>
        </div>
    );
};

class ForecastCard extends Component {
    render() {
        return (
            <div className="min-w-95% sm:min-w-128 sm:max-w-128 max-w-95% mt-4 flex min-h-full flex-col items-center rounded-2xl bg-sky-300 p-4 text-white">
                <ForecastTopBar />
                <Forecast />
            </div>
        );
    }
}

export default ForecastCard;
