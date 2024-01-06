import { Router, Request, Response, NextFunction } from "express";
import "dotenv/config";
import axios from "axios";

import Location from "../../models/Location";

const router: Router = Router();

router.post("/", (req: Request, res: Response, next: NextFunction) => {
    const location: Location = req.body.location;
    const OPENWEATHER_API_KEY: string = process.env.OPENWEATHER_API_KEY || "";

    if (!OPENWEATHER_API_KEY) {
        throw new Error("OPENWEATHER_API_KEY is not defined");
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${OPENWEATHER_API_KEY}`;

    try {
        const response: Promise<any> = axios.get(url);
        response.then((response) => {
            // console.log("Current weather: ", response.data);
            res.status(200).json(response.data);
        });
    } catch (error) {
        next(error);
    }
});

router.post(
    "/forecasts/hourly",
    (req: Request, res: Response, next: NextFunction) => {
        const location: Location = req.body.location;
        const OPENWEATHER_API_KEY: string =
            process.env.OPENWEATHER_API_KEY || "";
        const count: number = 8;

        if (!OPENWEATHER_API_KEY) {
            throw new Error("OPENWEATHER_API_KEY is not defined");
        }

        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&cnt=${count}&appid=${OPENWEATHER_API_KEY}`;

        try {
            const response: Promise<any> = axios.get(url);
            response
                .then((response) => {
                    // console.log("Hourly forecast: ", response.data);
                    res.status(200).json(response.data);
                })
                .catch((error) => {
                    if (error.response && error.response.status === 401) {
                        res.status(401);
                    } else {
                        next(error);
                    }
                });
        } catch (error) {
            next(error);
        }
    }
);

export default router;
