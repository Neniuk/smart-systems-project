import Location from "../models/Location";

const ADDRESS = "http://localhost:";
const PORT = "5000";

const getWeather = async (location: Location) => {
    // console.log("getWeather() called");
    const req: string = ADDRESS + PORT + "/weather";

    try {
        const res: Response = await fetch(req, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ location: location }),
        });
        // console.log("Response: ", res);

        const data: object = await res.json();
        // console.log("Data: ", data);

        return data;
    } catch (err: any) {
        console.log("Error: ", err);
    }
};

export default getWeather;
