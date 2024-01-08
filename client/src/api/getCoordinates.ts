import Location from "../models/Location";

const ADDRESS = "http://localhost:";
// Reference: https://stackoverflow.com/questions/49579028/adding-an-env-file-to-a-react-project
const PORT = process.env.REACT_APP_SERVER_PORT || "5000";

const getCoordinates = async (city: string) => {
    console.log("Fetching coordinates for city:", city);
    const req: string = ADDRESS + PORT + "/geocoding";

    try {
        const res: Response = await fetch(req, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ city: city }),
        });
        // console.log("Response: ", res);

        const data: any = await res.json();
        console.log("City coordinates: ", data);

        try {
            const location: Location = {
                latitude: data[0].lat,
                longitude: data[0].lon,
                time: new Date().getTime(),
            };

            return location;
        } catch (err: any) {
            console.log("Error: ", err);
        }
    } catch (err: any) {
        console.log("Error: ", err);
    }
};

export default getCoordinates;
