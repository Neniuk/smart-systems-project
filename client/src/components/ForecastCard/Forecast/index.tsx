const IndividualForecast = (props: any) => {
    console.log("INDIVIDUAL FORECAST:", props);

    const minTempKelvin: number = props.main.temp_min;
    const minTempCelsius: number = minTempKelvin - 273.15;

    const maxTempKelvin: number = props.main.temp_max;
    const maxTempCelsius: number = maxTempKelvin - 273.15;

    const weatherDescription: string = props.weather[0].description;

    return (
        <li>
            <div className="flex flex-row justify-between">
                <div>
                    <div>{props.dt_txt.slice(-8, -3)}</div>
                </div>
                <div className="items-start justify-start">
                    {weatherDescription}
                </div>
                <div className="flex flex-row gap-4">
                    <div>{Math.round(minTempCelsius)}°C</div>
                    <div>/</div>
                    <div>{Math.round(maxTempCelsius)}°C</div>
                </div>
            </div>
        </li>
    );
};

type ForecastProps = {
    forecast?: any;
};

const Forecast = (props: ForecastProps) => {
    // console.log("FORECAST PROPS:", props.forecast);
    return (
        <ul className="mx-4 my-4 flex flex-col gap-4">
            {props.forecast &&
                props.forecast.list.map((forecast: any) => (
                    <IndividualForecast {...forecast} />
                ))}
        </ul>
    );
};

export default Forecast;
