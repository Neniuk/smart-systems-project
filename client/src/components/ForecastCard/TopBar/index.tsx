const ForecastTopBar = ({ selectedForecast }: { selectedForecast: string }) => {
    return (
        <div className="flex flex-row gap-56 items-center">
            <h1 className="text-gray-500">
                Weekly Forecast
            </h1>
            <div className="relative text-gray-500">
                <h1>
                    Hourly Forecast
                </h1>
                <div className="absolute bottom-[-10px] left-0 right-0 h-1 bg-white rounded-full"></div>
            </div>
        </div>
    );
};

export default ForecastTopBar;