import React, { Component } from "react";

const ForecastTopBar = ({ selectedForecast }: { selectedForecast: string }) => {
    return (
        <div className="flex flex-row gap-56">
            <h1 className={selectedForecast === "weekly" ? "underline" : ""}>
                Weekly Forecast
            </h1>
            <h1 className={selectedForecast === "hourly" ? "underline" : ""}>
                Hourly Forecast
            </h1>
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

type ForecastCardProps = {
    selectedForecast: string;
};

class ForecastCard extends Component<ForecastCardProps> {
    render() {
        return (
            // TODO: Adjust card background gradient to match the figma design
            <div className="min-w-95% sm:min-w-128 sm:max-w-128 max-w-95% shadow-outer from-secondaryCardPrimary to-secondaryCardSecondary text-textDark flex min-h-screen flex-col items-center rounded-2xl bg-gradient-to-l p-4">
                <ForecastTopBar
                    selectedForecast={this.props.selectedForecast}
                />
                <Forecast />
            </div>
        );
    }
}

export default ForecastCard;
