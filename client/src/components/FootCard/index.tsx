import React, { useEffect, useState } from "react";
import shortsocks from "../../assets/images/shortsocks.jpg";
import thicksoks from "../../assets/images/thicksoks.jpg";
import sandals from "../../assets/images/sandals.jpg";
import shoes from "../../assets/images/shoes.jpg";
import wintershoes from "../../assets/images/wintershoes.jpg";
import "./style.css";

type FootCardProps = {
    minTempCelsius: number;
    maxTempCelsius: number;
};

const FootCard: React.FC<FootCardProps> = (props) => {
    const [selectedItems, setSelectedItems] = useState<Array<string>>(['Baseshirt', 'Coat']);
    const { minTempCelsius, maxTempCelsius } = props;

    useEffect(() => {
        if(maxTempCelsius>30){
            setSelectedItems(['Sandals'])
        }else if(minTempCelsius>10&&maxTempCelsius<=30){
            setSelectedItems(['Shortsocks','Shoes'])
        }else if(minTempCelsius>-10&&maxTempCelsius<=10){
            setSelectedItems(['Thicksoks','Shoes'])
        }else if(minTempCelsius>-20&&maxTempCelsius<=-10){
            setSelectedItems(['Shortsocks','Wintershoes'])
        }else if(minTempCelsius<-20){
            setSelectedItems(['Thicksoks','Wintershoes'])
        }
    }, [minTempCelsius, maxTempCelsius]);

    const getClass = (label: string) => {
        return selectedItems.findIndex(_ => _ === label) === -1 ? 'opacity-50' : '';
    }

    const items = [
        { label: 'Shortsocks', image: shortsocks },
        { label: 'Thicksoks', image: thicksoks },
        { label: 'Sandals', image: sandals },
        { label: 'Shoes', image: shoes },
        { label: 'Wintershoes', image: wintershoes },
    ];

    return (
        <div className="flex justify-around items-center space-x-4 bg-gradient-to-r from-mainCardPrimary via-mainCardPrimary to-mainCardSecondary p-4 rounded-xl shadow-md">
            {items.map((item, ndx) => (
                <div key={ndx} className={`flex flex-col items-center ${getClass(item.label)}`}>
                    <div className="rounded-md p-2 foot-item-box">
                        <img src={item.image} alt={item.label} className="rounded-md" />
                    </div>
                    <p className=" text-sm">{item.label}</p>
                </div>
            ))}
        </div>
    );
};

export default FootCard;
