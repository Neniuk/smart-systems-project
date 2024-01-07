import Location from "../models/Location";

const ADDRESS = "http://localhost:";
// Reference: https://stackoverflow.com/questions/49579028/adding-an-env-file-to-a-react-project
const PORT = process.env.REACT_APP_SERVER_PORT || "5000";

const getActivities = async (city: string, weather: any) => {
    console.log("Fetching activities for city:", city);
    const req: string = ADDRESS + PORT + "/activities";

    try {
        const res: Response = await fetch(req, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ city: city, weather: weather }),
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
