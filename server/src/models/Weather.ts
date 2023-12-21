type Weather = {
    locationName: string;
    country: string;
    feelsLike: number;
    groundLevel: number;
    humidity: number;
    pressure: number;
    seaLevel: number;
    currentTemperature: number;
    minimumTemperature: number;
    maximumTemperature: number;
    weatherMain: string;
    weatherDescription: string;
    weatherIcon: string;
    windSpeed: number;
    windDegree: number;
    windGust: number;
};

export default Weather;
