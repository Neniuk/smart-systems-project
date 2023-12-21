import express, { Express, Request, Response } from "express";
import cors from "cors";
import path from "path";

const app: Express = express();
const PORT: string = process.env.PORT || "3001";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../../client/build")));

app.get("/", (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => {
	console.log("Server is running at http://localhost:" + PORT);
});
