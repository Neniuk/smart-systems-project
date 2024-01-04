import React, { useEffect, useState } from "react";
import baseshirt from "../../assets/images/baseshirt.jpg";
import hoodie from "../../assets/images/hoodie.jpg";
import tshirt from "../../assets/images/tshirt.jpg";
import sweater from "../../assets/images/sweater.jpg";
import coat from "../../assets/images/coat.jpg";
import downjacket from "../../assets/images/downjacket.jpg";

type UpperBodyProps = {
  minTempCelsius: number;
  maxTempCelsius: number;
};

const UpperBodyCard: React.FC<UpperBodyProps> = (props) => {
  const [selectedItems, setSelectedItems] = useState<Array<Array<string>>>([]);
  const { minTempCelsius, maxTempCelsius } = props;

  useEffect(() => {
    if (maxTempCelsius > 20) {
      setSelectedItems([['T-Shirt'], ['Baseshirt']]);
    } else if (minTempCelsius >= 10 && maxTempCelsius <= 20) {
      setSelectedItems([['Baseshirt'], ['T-Shirt', 'Coat']]);
    } else if (minTempCelsius >= 0 && maxTempCelsius < 10) {
      setSelectedItems([['Baseshirt',], ['Hoodie', 'Coat']]);
    } else if (maxTempCelsius <= 0) {
      setSelectedItems([['Baseshirt', 'Sweater', 'Down Jacket']]);
    }
  }, [minTempCelsius, maxTempCelsius]);

  const getClass = (label: string) => {
    return "";
  };

  return (
    <div className="flex h-full justify-center items-center space-x-1 bg-gradient-to-r from-blue-200 to-green-200 p-4 rounded-xl shadow-md">
      {selectedItems.map((subArray, subIndex) => (
        <React.Fragment key={subIndex}>
          {subArray.map((item, index) => (
            <React.Fragment key={index}>
              <div className={`flex flex-col items-center ${getClass(item)}`}>
                <div className="body-item-box rounded-md">
                  <img src={getImage(item)} alt={item} className="rounded-md shadow-sm" />
                </div>
                <p className="py-3 text-sm">{item}</p>
              </div>
              {index < subArray.length - 1 && (
                <p className={`text-white text-3xl text-shadow ${getClass(item)}`}>+</p>
              )}
            </React.Fragment>
          ))}
          {subIndex < selectedItems.length - 1 && <p className="text-white text-3xl text-shadow">/</p>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default UpperBodyCard;

// 获取每个元素对应的图片
const getImage = (item: string) => {
  switch (item) {
    case "T-Shirt":
      return tshirt;
    case "Sweater":
      return sweater;
    case "Hoodie":
      return hoodie;
    case "Baseshirt":
      return baseshirt;
    case "Coat":
      return coat;
    case "Down Jacket":
      return downjacket;
    default:
      return "";
  }
};
