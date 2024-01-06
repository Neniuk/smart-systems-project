const ForecastTopBar = ({ selectedForecast }: { selectedForecast: string }) => {
    return (
        <div className="flex flex-row gap-56">
            <h1 className={selectedForecast === "weekly" ? "underline" : ""}>
                Weekly Forecast
            </h1>
            <h1 className={selectedForecast === "hourly" ? "underline" : ""}>
                Hourly Forecast
            </h1>
        </div>
    );
};

export default ForecastTopBar;
