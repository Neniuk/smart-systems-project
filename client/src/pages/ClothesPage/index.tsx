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
    weather?: any;
    location?: Location;
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

    console.log("CLOTHES PAGE PROPS:", props.weather.weather);
    const currentTempKelvin: number = props.weather.weather.main.temp;
    const currentTempCelsius: number = currentTempKelvin - 273.15;

    const minTempKelvin: number = props.weather.weather.main.temp_min;
    const minTempCelsius: number = minTempKelvin - 273.15;

    const maxTempKelvin: number = props.weather.weather.main.temp_max;
    const maxTempCelsius: number = maxTempKelvin - 273.15;

    console.log("MIN/MAX TEMPERATURES:", minTempCelsius, maxTempCelsius);

    return (
        <>
            <div className=" flex h-screen w-screen items-center">
                <LocationSearchBar />{" "}
                {/* Inserted LocationSearchBar component */}
                <div className="mx-auto my-auto flex w-4/5 flex-wrap rounded-md bg-white">
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
