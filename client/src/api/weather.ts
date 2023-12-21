import Location from "../models/Location";

const ADDRESS = "http://localhost:";
const PORT = "5000";

const getWeather = async (location: Location) => {
    const req: string = ADDRESS + PORT + "/weather";

    const res: Response = await fetch(req, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ location: location }),
    });

    const data: object = await res.json();

    return data;
};

export default getWeather;
