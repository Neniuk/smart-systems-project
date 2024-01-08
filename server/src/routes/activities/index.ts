import { Router, Request, Response, NextFunction } from "express";
import "dotenv/config";
import OpenAI from "openai";

const router: Router = Router();

const OPENAI_API_KEY: string = process.env.OPENAI_API_KEY || "";
if (!OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is not defined");
}

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

type openAICompletionProps = {
    city: string;
    weather: any;
};

// Reference: https://platform.openai.com/docs/quickstart?context=node
const openAICompletion = async (props: openAICompletionProps) => {
    console.log(props.weather);

    const prompt: string =
        `You are to suggest activities to do in the location provided according to the also provided weather conditions in the JSON format data of the current weather at the location. The suggestions should be in the form of a list. Limit the length of the response to minimize the amount of spent tokens\n\n` +
        `* Location: \n${props.city}\n\n` +
        `* Current weather: \nTemperature: ${props.weather.temperature}C, Minimum temperature: ${props.weather.minTemperature}C, Maximum temperature: ${props.weather.maxTemperature}C, Conditions: ${props.weather.weather}, Wind: ${props.weather.wind}m/s\n\n` +
        `* Activity suggestions example (Not suggestion of format): \nFor example, if the current weather is sunny and warm, a good activity might be to visit a local park or beach.`;

    const promptStatic: string =
        `You are to suggest activities to do in the location provided according to the also provided weather conditions in the JSON format data of the current weather at the location. The suggestions should be in the form of a list. Limit the length of the response to minimize the amount of spent tokens\n\n` +
        `* Location: \nLahti\n\n` +
        `* Current weather: \nTemperature: 3C, Conditions: Rainy, Wind: 3m/s\n\n` +
        `* Activity suggestions example (Not suggestion of format): \nFor example, if the current weather is sunny and warm, a good activity might be to visit a local park or beach.`;

    // console.log(prompt);

    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: prompt }],
        model: "gpt-3.5-turbo",
        max_tokens: 2048,
        temperature: 0.9,
    });

    // console.log(completion);
    // console.log(completion.choices[0]);

    try {
        if (completion.choices[0].message.content) {
            const suggestedActivities: string =
                completion.choices[0].message.content;
            return suggestedActivities;
        }
    } catch (err: any) {
        console.log("Error: ", err);
    }
};

router.post("/", (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.body.weather);
    const promptObject: openAICompletionProps = {
        city: req.body.city,
        weather: req.body.weather,
    };

    try {
        const suggestedActivities: Promise<any> =
            openAICompletion(promptObject);
        suggestedActivities.then((suggestedActivities) => {
            res.status(200).json(suggestedActivities);
        });
    } catch (error) {
        next(error);
    }
});

export default router;
