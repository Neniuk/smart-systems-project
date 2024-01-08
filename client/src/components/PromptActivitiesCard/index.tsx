import React, { useEffect, useState } from "react";

import Location from "../../models/Location";
import getActivities from "../../api/getActivities";
import getCity from "../../api/getCity";

type PromptActivitiesCardProps = {
    location?: Location;
    weather?: any;
};

const PromptActivitiesCard = (props: PromptActivitiesCardProps) => {
    const [dataAvailable, setDataAvailable] = useState(false);
    const [suggestedActivities, setSuggestedActivities] = useState("");

    useEffect(() => {
        if (props.location && props.weather) {
            setDataAvailable(true);
        } else {
            setDataAvailable(false);
        }
    }, [props.location, props.weather]);

    const handleGetSuggestedActivities = () => {
        // console.log("OnClick called");
        if (props.location && props.weather) {
            getCity(props.location).then((city) => {
                // console.log("PromptActivitiesCard - City: ", city);
                if (city) {
                    getActivities(city, props.weather).then((data) => {
                        if (data) {
                            console.log("Suggested activities: \n", data);

                            let lines = data.split("\n");

                            const jsxLines = lines.map(
                                (line: string, index: number) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                        <br />
                                    </React.Fragment>
                                )
                            );

                            setSuggestedActivities(jsxLines);
                        }
                    });
                }
            });
        }
    };

    return (
        <div className="min-w-95% sm:min-w-128 sm:max-w-128 max-w-95% shadow-outer text-textDark from-secondaryCardPrimary to-secondaryCardSecondary relative flex flex-col justify-center gap-4 overflow-hidden rounded-2xl border-2 border-blue-400 bg-gradient-to-l p-4">
            <div
                className="z-10 m-auto cursor-pointer text-center text-xl font-bold text-blue-500"
                onClick={
                    dataAvailable ? handleGetSuggestedActivities : undefined
                }
            >
                Get Suggested Activities
            </div>
            <div className="z-10">{suggestedActivities}</div>
        </div>
    );
};

export default PromptActivitiesCard;
