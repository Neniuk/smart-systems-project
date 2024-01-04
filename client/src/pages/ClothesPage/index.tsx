import React, { useEffect, useState } from "react";
import HatCard from "../../components/HatCard"
import UpperBodyCard from "../../components/UpperBodyCard";
import LowerBodyCard from "../../components/LowerBodyCard";
import FootCard from "../../components/FootCard";
import getWeather from "../../api/getWeather";
import Location from "../../models/Location";
import LocationSearchBar from "../../components/LocationSearchBar";
type WeatherCard = {
    weatherData?: any;
};
const ClothesPage: React.FC = () => {

    const [location, setLocation] = useState<Location | undefined>(undefined);
    const [weatherData, setWeatherData] = useState<object | undefined>(
        undefined
    );
    const [celsius, setCelsius] = useState<{
        minTempCelsius: number,
        maxTempCelsius: number,
    } | null>(null);


    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const location: Location = {
                        longitude: position.coords.longitude,
                        latitude: position.coords.latitude,
                    };
                    localStorage.setItem("location", JSON.stringify(location));
                    setLocation(location);
                    getWeather(location).then((data) => {
                        setWeatherData(data);

                        const weatherData: any = data as unknown;

                        const minTempKelvin: number = weatherData?.main.temp_min;
                        const minTempCelsius: number = minTempKelvin - 273.15;

                        const maxTempKelvin: number = weatherData?.main.temp_max;
                        const maxTempCelsius: number = maxTempKelvin - 273.15;

                        setCelsius({
                            maxTempCelsius,
                            minTempCelsius
                        })
                    });
                },
                (error) => {
                    console.error("Error retrieving geolocation data", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser");
        }
    }, []);

    if (!celsius) return <div className=" w-screen h-screen flex items-center"></div>;

    return <>
        <div className=" w-screen h-screen flex items-center">
            <LocationSearchBar /> {/* Corrected the component name here */}
            <div className="w-4/5 mx-auto my-auto flex bg-white rounded-md">
                <div className="flex-1 flex flex-col">
                    <div className="p-4">
                        <HatCard maxTempCelsius={celsius.maxTempCelsius} minTempCelsius={celsius.minTempCelsius} />
                    </div>
                    <div className="flex-1 p-4">
                        <UpperBodyCard maxTempCelsius={celsius.maxTempCelsius} minTempCelsius={celsius.minTempCelsius} />
                    </div>
                </div>
                <div className="flex-1 flex flex-col">
                    <div className="flex-4  p-4">
                        <div className="flex-1 ">
                            <LowerBodyCard maxTempCelsius={celsius.maxTempCelsius} minTempCelsius={celsius.minTempCelsius} />
                        </div>
                    </div>
                    <div className="p-4">
                        <FootCard maxTempCelsius={celsius.maxTempCelsius} minTempCelsius={celsius.minTempCelsius} />
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default ClothesPage;