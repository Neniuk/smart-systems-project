import { Location } from "../models/Location";

const getUserLocation = (handleLocation: (location: Location) => void, handleError: (error: string) => void): void => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position: GeolocationPosition) => {
                const location: Location = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                handleLocation(location);
            },
            (error: GeolocationPositionError) => {
                handleError(`ERROR(${error.code}): ${error.message}`);
            }
        );
    } else {
        handleError("Geolocation is not supported by this browser.");
    }
};
