import React, { useEffect, useState } from "react";
import HatCard from "../../components/HatCard";
import UpperBodyCard from "../../components/UpperBodyCard";
import LowerBodyCard from "../../components/LowerBodyCard";
import FootCard from "../../components/FootCard";
import getWeather from "../../api/getWeather";
import Location from "../../models/Location";
import LocationSearchBar from "../../components/LocationSearchBar";
type WeatherCard = {
    weatherData?: any;
};

type ClothesPageProps = {
    location?: Location;
    weatherData?: object;
};

const ClothesPage = (props: ClothesPageProps) => {
    // const [celsius, setCelsius] = useState<{
    //     minTempCelsius: number;
    //     maxTempCelsius: number;
    // } | null>(null);

    // setCelsius({
    //     minTempCelsius: 0,
    //     maxTempCelsius: 0,
    // });

    // if (!celsius)
    //     return <div className=" flex h-screen w-screen items-center"></div>;

    return (
        <>
            <div className=" flex h-screen w-screen items-center">
                <div className="mx-auto my-auto flex w-4/5 rounded-md bg-white">
                    <div className="flex flex-1 flex-col">
                        <div className="p-4">
                            <HatCard
                                // maxTempCelsius={celsius.maxTempCelsius}
                                // minTempCelsius={celsius.minTempCelsius}
                                maxTempCelsius={0}
                                minTempCelsius={0}
                            />
                        </div>
                        <div className="flex-1 p-4">
                            <UpperBodyCard
                                // maxTempCelsius={celsius.maxTempCelsius}
                                // minTempCelsius={celsius.minTempCelsius}
                                maxTempCelsius={0}
                                minTempCelsius={0}
                            />
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col">
                        <div className="flex-4  p-4">
                            <div className="flex-1 ">
                                <LowerBodyCard
                                    // maxTempCelsius={celsius.maxTempCelsius}
                                    // minTempCelsius={celsius.minTempCelsius}
                                    maxTempCelsius={0}
                                    minTempCelsius={0}
                                />
                            </div>
                        </div>
                        <div className="p-4">
                            <FootCard
                                // maxTempCelsius={celsius.maxTempCelsius}
                                // minTempCelsius={celsius.minTempCelsius}
                                maxTempCelsius={0}
                                minTempCelsius={0}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClothesPage;
