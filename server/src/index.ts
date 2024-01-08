import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import path from "path";

import weatherRouter from "./routes/weather";
import geocodingRouter from "./routes/geocoding";
import activitiesRouter from "./routes/activities";

const app: Express = express();
const PORT: string = process.env.PORT || "5000";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../../client/build")));

app.use("/weather", weatherRouter);
app.use("/weather/forecasts/hourly", weatherRouter);
app.use("/weather/forecasts/weekly", weatherRouter);

app.use("/geocoding", geocodingRouter);
app.use("/geocoding/reverse", geocodingRouter);

app.use("/activities", activitiesRouter);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT);
});
