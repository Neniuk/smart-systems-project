// Reference: https://www.npmjs.com/package/react-multi-carousel
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./index.css";
import { restaurantimages } from "../../assets/images/ActivitiesCarousel/restaurantimages.js";
import { hotelimages } from "../../assets/images/ActivitiesCarousel/hotelimages.js";


type PlaceCarouselCardProps = {
        item: string;
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

const PlaceCarouselCard = (props: PlaceCarouselCardProps) => {


    return (
        <>
        <div className="card-container rounded-md bg-white">
        <h2 className="Activities"> {props.item}</h2>
        {<Carousel responsive={responsive}>
        {(getActivity(props.item)).map(({ image, text }, index) => (
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

    );
};

export default PlaceCarouselCard;

const getActivity = (item: string) => {
    if (item=="Hotels") {
        return hotelimages;
    }
    else {
        return restaurantimages;
    }
};
