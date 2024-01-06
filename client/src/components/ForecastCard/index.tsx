import React, { Component } from "react";

import Forecast from "./Forecast";
import ForecastTopBar from "./TopBar";

type ForecastCardProps = {
    selectedForecast: string;
    forecast?: any;
};

class ForecastCard extends Component<ForecastCardProps> {
    render() {
        // console.log("FORECAST CARD PROPS:", this.props.forecast?.forecast);
        return (
            <div className="min-w-95% sm:min-w-128 sm:max-w-128 max-w-95% shadow-outer from-secondaryCardPrimary to-secondaryCardSecondary text-textDark flex-1 flex-col items-center overflow-hidden rounded-2xl bg-gradient-to-l p-4">
                <ForecastTopBar
                    selectedForecast={this.props.selectedForecast}
                />
                <Forecast forecast={this.props.forecast?.forecast} />
            </div>
        );
    }
}

export default ForecastCard;
