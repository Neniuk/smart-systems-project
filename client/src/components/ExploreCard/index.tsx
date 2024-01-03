import React, { Component } from "react";

type ExploreCardProps = {};

class ExploreCard extends Component<ExploreCardProps> {
    render() {
        return (
            // TODO: Adjust card background gradient to match the figma design
            <div className="min-w-95% sm:min-w-128 sm:max-w-128 max-w-95% shadow-outer from-mainCardPrimary via-mainCardPrimary to-mainCardSecondary flex flex-row justify-between rounded-2xl bg-gradient-to-l p-4">
                <div>
                    <img src="" alt="Location Marker Icon"></img>
                </div>
                <div className="text-right">
                    <h1 className="text-3xl">Explore</h1>
                    <h2 className="text-textLightSecondary">
                        Find activities near you
                    </h2>
                </div>
            </div>
        );
    }
}

export default ExploreCard;
