import React, { Component } from "react";

type HamburgerButtonProps = {};

class HamburgerButton extends Component<HamburgerButtonProps> {
    render() {
        return (
            <div className="min-w-95% sm:min-w-128 sm:max-w-128 max-w-95% justify-self-start">
                <button className="flex h-12 w-12 flex-col items-center justify-center rounded-full bg-gray-200 p-2 drop-shadow-md">
                    <div className="mb-1.5 h-0.5 w-6 bg-black"></div>
                    <div className="mb-1.5 h-0.5 w-6 bg-black"></div>
                    <div className="h-0.5 w-6 bg-black"></div>
                </button>
            </div>
        );
    }
}

export default HamburgerButton;
