import React, { useEffect, useState } from "react";
import noHat from "../../assets/images/no hat.png";
import cap from "../../assets/images/cap.jpg";
import autumnHat from "../../assets/images/autumnhat.jpg";
import winterHat from "../../assets/images/winterhat.jpg";
import "./index.css";

type HatCardProps = {
  minTempCelsius: number;
  maxTempCelsius: number;
};

const HatCard: React.FC<HatCardProps> = (props) => {
  const [hatSelect, setHatSelect] = useState<number>(-1);
  const { minTempCelsius, maxTempCelsius } = props;

  useEffect(() => {
    let ndx: number = 0;
    if (maxTempCelsius > 25) {
      ndx = 0;
    } else if (minTempCelsius >= 15 && maxTempCelsius < 25) {
      ndx = 1;
    } else if (minTempCelsius >= -4 && maxTempCelsius < 15) {
      ndx = 2;
    } else if (maxTempCelsius < -4) {
      ndx = 3;
    }
    setHatSelect(ndx);
  }, [minTempCelsius, maxTempCelsius]);

  const getHatImage = (ndx: number) => {
    switch (ndx) {
      case 0:
        return noHat;
      case 1:
        return cap;
      case 2:
        return autumnHat;
      case 3:
        return winterHat;
      default:
        return noHat;
    }
  };

  return (
    <div className="flex justify-between items-center space-x-4 bg-gradient-to-r from-blue-200 to-green-200 p-4 rounded-xl shadow-md">
      {["No Hat", "Cap", "Autumn Hat", "Winter Hat"].map((hat, ndx) => (
        <div key={ndx} className={`flex flex-col items-center ${hatSelect === ndx ? "" : "opacity-50"}`}>
          <img src={getHatImage(ndx)} alt={hat} className="rounded-full p-2 hat-item-box" />
          <p className=" text-sm">{hat}</p>
        </div>
      ))}
    </div>
  );
};

export default HatCard;
