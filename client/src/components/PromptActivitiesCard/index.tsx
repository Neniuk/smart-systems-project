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
        console.log("Onlick called");
        if (props.location && props.weather) {
            getCity(props.location).then((city) => {
                console.log("PromptActivitiesCard", city);
                if (city) {
                    getActivities(city, props.weather).then((data) => {
                        if (data) {
                            console.log("Suggested activities: ", data);

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
        <div
            className="min-w-95% sm:min-w-128 sm:max-w-128 max-w-95% from-mainCardPrimary via-mainCardPrimary to-mainCardSecondary relative flex cursor-pointer flex-col justify-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-l p-4"
            onClick={dataAvailable ? handleGetSuggestedActivities : undefined}
        >
            <div className="absolute inset-0 bg-black opacity-5"></div>
            <div className="text-textAccent z-10 m-auto text-center text-xl font-bold">
                Get Suggested Activities
            </div>
            <div className="z-10">{suggestedActivities}</div>
        </div>
    );
};

export default PromptActivitiesCard;
