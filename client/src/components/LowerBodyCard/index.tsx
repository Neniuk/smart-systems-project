import React, { useEffect, useState } from "react";
import leggings from "../../assets/images/leggings.jpg";
import pants from "../../assets/images/pants.jpg";
import jeans from "../../assets/images/jeans.jpg";
import thickpants from "../../assets/images/pants.jpg";
import "./index.css";

type LowerBodyProps = {
  minTempCelsius: number;
  maxTempCelsius: number;
};

const LowerBodyCard: React.FC<LowerBodyProps> = (props) => {
  const [selectedItem, setSelectedItem] = useState<Array<Array<string>>>([]);
  const { minTempCelsius, maxTempCelsius } = props;

  useEffect(() => {
    if (maxTempCelsius >= 10) {
      setSelectedItem([['Jeans'], ['Pants']]);
    } else if (minTempCelsius >= 0 && maxTempCelsius < 10) {
      setSelectedItem([['Leggings', 'Pants']]);
    } else if (maxTempCelsius <= 0) {
      setSelectedItem([['Leggings', 'Thickpants']]);
    }
  }, [minTempCelsius, maxTempCelsius]);

  const getClass = (label: string) => {
    return "";
  };

  const items = [
    { label: 'Jeans', image: jeans },
    { label: 'Leggings', image: leggings },
    { label: 'Pants', image: pants },
    { label: 'Thickpants', image: pants },
  ];

  return (
    <div className="flex justify-center items-center space-x-1 bg-gradient-to-r from-blue-200 to-green-200 p-4 rounded-xl shadow-md">
      {selectedItem.map((subArray, subIndex) => (
        <React.Fragment key={subIndex}>
          {subArray.map((item, index) => (
            <React.Fragment key={index}>
              <div className={`flex flex-col items-center ${getClass(item)}`}>
                <div className="lower-body-item rounded-md">
                  <img src={getImage(item)} alt={item} className="rounded-md shadow-sm" />
                </div>
                <p className="py-1 text-sm">{item}</p>
              </div>
              {index < subArray.length - 1 && (
                <p className={`text-white text-3xl text-shadow ${getClass(item)}`}>+</p>
              )}
            </React.Fragment>
          ))}
          {subIndex < selectedItem.length - 1 && <p className="text-white text-3xl text-shadow">/</p>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default LowerBodyCard;

// 获取每个元素对应的图片
const getImage = (item: string) => {
  switch (item) {
    case 'Jeans':
      return jeans;
    case 'Leggings':
      return leggings;
    case 'Pants':
      return pants;
    case 'Thickpants':
      return thickpants;
    default:
      return '';
  }
};
