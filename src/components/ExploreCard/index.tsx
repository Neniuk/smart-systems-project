import React, { Component } from "react";

type ExploreCardProps = {};

class ExploreCard extends Component<ExploreCardProps> {
    render() {
        return (
            <div className="mx-auto mt-4 flex max-w-95% flex-row justify-between rounded-2xl bg-sky-300 p-4 text-white sm:max-w-96">
                <div>
                    <img src="" alt="Location Marker Icon"></img>
                </div>
                <div className="text-right">
                    <h1 className="text-3xl">Explore</h1>
                    <h2 className="text-sky-100">Find activities near you</h2>
                </div>
            </div>
        );
    }
}

export default ExploreCard;
