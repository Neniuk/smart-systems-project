import Location from "../models/Location";
import getWeather from "./api/getWeather"; 

const handleLocation = (location: Location) => {
    console.log("Location obtained:", location);
    getWeather(location);
};
