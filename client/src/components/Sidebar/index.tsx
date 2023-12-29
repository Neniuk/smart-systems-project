import React, { Component } from "react";

import LocationSearchbar from "./LocationSearchbar";

class Sidebar extends Component {
    render() {
        return (
            <div className="flex flex-col items-center justify-center gap-8 bg-gray-400 pt-16">
                <LocationSearchbar />
                <div>
                    <h3>Current location</h3>
                    <p>Lahti</p>
                </div>
                <div>Line</div>
                <div>
                    <h3>Recent locations</h3>
                    <p>Lahti</p>
                    <p>Helsinki</p>
                </div>
                <div>Line</div>
                <div>Manage locations</div>
                <div>Line</div>
            </div>
        );
    }
}

export default Sidebar;
