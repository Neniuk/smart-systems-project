import React, { Component } from "react";

import Forecast from "./Forecast";
import ForecastTopBar from "./TopBar";

type ForecastCardProps = {
    selectedForecast: string;
};

class ForecastCard extends Component<ForecastCardProps> {
    render() {
        return (
            // TODO: Adjust card background gradient to match the figma design
            <div className="min-w-95% sm:min-w-128 sm:max-w-128 max-w-95% shadow-outer from-secondaryCardPrimary to-secondaryCardSecondary text-textDark flex flex-col items-center rounded-2xl bg-gradient-to-l p-4">
                <ForecastTopBar
                    selectedForecast={this.props.selectedForecast}
                />
                <Forecast />
            </div>
        );
    }
}

export default ForecastCard;
