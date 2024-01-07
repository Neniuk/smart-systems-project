import { Router, Request, Response, NextFunction } from "express";
import "dotenv/config";
import axios from "axios";

import Location from "../../models/Location";

const router: Router = Router();

router.post("/", (req: Request, res: Response, next: NextFunction) => {
    const city: string = req.body.city;
    const OPENWEATHER_API_KEY: string = process.env.OPENWEATHER_API_KEY || "";
    const limit: number = 1;

    if (!OPENWEATHER_API_KEY) {
        throw new Error("OPENWEATHER_API_KEY is not defined");
    }

    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${OPENWEATHER_API_KEY}`;

    try {
        const response: Promise<any> = axios.get(url);
        response.then((response) => {
            res.status(200).json(response.data);
        });
    } catch (error) {
        next(error);
    }
});

router.post("/reverse", (req: Request, res: Response, next: NextFunction) => {
    const location: Location = req.body.location;
    const OPENWEATHER_API_KEY: string = process.env.OPENWEATHER_API_KEY || "";
    const limit: number = 1;

    if (!OPENWEATHER_API_KEY) {
        throw new Error("OPENWEATHER_API_KEY is not defined");
    }

    const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${location.latitude}&lon=${location.longitude}&limit=${limit}&appid=${OPENWEATHER_API_KEY}`;

    try {
        const response: Promise<any> = axios.get(url);
        response.then((response) => {
            res.status(200).json(response.data);
        });
    } catch (error) {
        next(error);
    }
});

export default router;
