import { Router, Request, Response, NextFunction } from "express";
import "dotenv/config";
import axios from "axios";

import Location from "../../../models/Location";

const router: Router = Router();

router.post("/weekly", (req: Request, res: Response, next: NextFunction) => {
    const location: Location = req.body.location;
    const OPENWEATHER_API_KEY: string = process.env.OPENWEATHER_API_KEY || "";
    const days: number = 7;

    if (!OPENWEATHER_API_KEY) {
        throw new Error("OPENWEATHER_API_KEY is not defined");
    }

    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${location.latitude}&lon=${location.longitude}&cnt=${days}&appid=${OPENWEATHER_API_KEY}`;

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
