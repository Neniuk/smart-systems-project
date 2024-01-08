// Reference: https://www.npmjs.com/package/react-multi-carousel
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { winterimages } from "../../assets/images/ActivitiesCarousel/winterimages.js";
import { outdoorimages } from "../../assets/images/ActivitiesCarousel/outdoorimages.js";
import { indoorimages } from "../../assets/images/ActivitiesCarousel/indoorimages.js";
import "./index.css";
import getWeather from "../../api/getWeather";
import Location from "../../models/Location";
import LocationSearchBar from "../../components/LocationSearchBar";


type CarouselCardProps = {
  minTempCelsius: number;
  maxTempCelsius: number;
};

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const CarouselCard = (props: CarouselCardProps) => {
<<<<<<< Updated upstream
    console.log("CAROUSEL PROPS:", props.weather);
    const currentTempKelvin: number = props.weather?.weather.main.temp;
    const currentTempCelsius: number = currentTempKelvin - 273.15;

    const minTempKelvin: number = props.weather?.weather.main.temp_min;
    const minTempCelsius: number = minTempKelvin - 273.15;

    const maxTempKelvin: number = props.weather?.weather.main.temp_max;
    const maxTempCelsius: number = maxTempKelvin - 273.15;
    console.log("MIN/MAX TEMPERATURES:", minTempCelsius, maxTempCelsius);

    return (
        <>
            <div className="card-container rounded-md bg-white">
                <h2 className="Activities"> Activities</h2>
                {
                    <Carousel responsive={responsive}>
                        {getActivity(minTempCelsius, maxTempCelsius).map(
                            ({ image, text }, index) => (
                                <React.Fragment key={index}>
                                    <div className="card" key={index}>
                                        <img
                                            width={200}
                                            height={150}
                                            className="product--image rounded-md"
                                            src={image}
                                            alt={text}
                                        />
                                        <p className="title">{text}</p>
                                    </div>
                                </React.Fragment>
                            )
                        )}
                    </Carousel>
                }
            </div>
        </>
=======


    return (
        <>
        <div className="card-container rounded-md bg-white">
        <h2 className="Activities"> Activities</h2>
        {<Carousel responsive={responsive}>
        {(getActivity(props.minTempCelsius, props.maxTempCelsius)).map(({ image, text }, index) => (
        <React.Fragment key={index}>
          <div className="card" key={index}>
            <img width={200} height={150} className="product--image rounded-md" src={image} alt={text} />
            <p className="title">{text}</p>
          </div>
          </React.Fragment>
        ))}
      </Carousel>}
      </div>
      </>

>>>>>>> Stashed changes
    );
};

export default CarouselCard;

const getActivity = (minTempCelsius: number, maxTempCelsius: number) => {
    if (minTempCelsius >= -20 && maxTempCelsius < 0) {
        return winterimages;
    } else if (minTempCelsius >= 5 && maxTempCelsius <= 35) {
        return outdoorimages;
    } else {
        return indoorimages;
    }
};
