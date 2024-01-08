import Location from "../models/Location";

const ADDRESS = "http://localhost:";
// Reference: https://stackoverflow.com/questions/49579028/adding-an-env-file-to-a-react-project
const PORT = process.env.REACT_APP_SERVER_PORT || "5000";

const getActivities = async (city: string, weather: any) => {
    console.log("Fetching activities for city:", city);
    const req: string = ADDRESS + PORT + "/activities";

    // console.log(weather);
    const weatherDescription: string = weather.weather.weather[0].main;

    const tempKelvin: number = weather.weather.main.temp;
    const tempCelsius: number = tempKelvin - 273.15;

    const minTempKelvin: number = weather.weather.main.temp_min;
    const minTempCelsius: number = minTempKelvin - 273.15;

    const maxTempKelvin: number = weather.weather.main.temp_max;
    const maxTempCelsius: number = maxTempKelvin - 273.15;

    const windSpeed: number = weather.weather.wind.speed;

    const weatherPrompt: any = {
        temperature: tempCelsius,
        minTemperature: minTempCelsius,
        maxTemperature: maxTempCelsius,
        weather: weatherDescription,
        wind: windSpeed,
    };

    try {
        const res: Response = await fetch(req, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ city: city, weather: weatherPrompt }),
        });
        // console.log("Response: ", res);

        const data: any = await res.json();

        try {
            const suggestedActivities: any = data;

            return suggestedActivities;
        } catch (err: any) {
            console.log("Error: ", err);
        }
    } catch (err: any) {
        console.log("Error: ", err);
    }
};

export default getActivities;
