import Location from "../models/Location";

const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const locationData: Location = {
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude,
                };
                console.log(locationData);
                return locationData;
            },
            (error) => {
                console.error("Error retrieving geolocation data", error);
            }
        );
    } else {
        console.error("Geolocation is not supported by this browser");
    }
};

export default getLocation;
