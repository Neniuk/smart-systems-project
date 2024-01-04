import Location from "../models/Location";

const getLocation = (): Promise<Location | null> => {
    console.log("Fetching location data...");
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position: GeolocationPosition) => {
                    const locationData: Location = {
                        longitude: position.coords.longitude,
                        latitude: position.coords.latitude,
                        time: position.timestamp,
                    };
                    console.log(locationData);
                    resolve(locationData);
                },
                (error: GeolocationPositionError) => {
                    console.error("Error retrieving geolocation data", error);
                    reject(null);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser");
            reject(null);
        }
    });
};

export default getLocation;
