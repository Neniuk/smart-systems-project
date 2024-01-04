import React, { Component } from "react";

type ExploreCardProps = {};

class ExploreCard extends Component<ExploreCardProps> {
    render() {
        return (
            // TODO: Adjust card background gradient to match the figma design
            <div className="min-w-95% sm:min-w-128 sm:max-w-128 max-w-95% from-mainCardPrimary via-mainCardPrimary to-mainCardSecondary flex flex-row justify-between rounded-2xl bg-gradient-to-l p-4">
                <div className="ml-2 flex items-center">
                    {/* <img src="" alt="Location Marker Icon"></img> */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        width="36"
                        viewBox="0 0 384 512"
                    >
                        {/* !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                        <path
                            fill="#ffffff"
                            d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                        />
                    </svg>
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
