import Location from "../models/Location";

const ADDRESS = "http://localhost:";
// Reference: https://stackoverflow.com/questions/49579028/adding-an-env-file-to-a-react-project
const PORT = process.env.REACT_APP_SERVER_PORT || "5000";

const getCity = async (location: Location) => {
    console.log("Fetching city name for location:", location);
    const req: string = ADDRESS + PORT + "/geocoding/reverse";

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
        console.log("City name: ", data);

        return data;
    } catch (err: any) {
        console.log("Error: ", err);
    }
};

export default getCity;
