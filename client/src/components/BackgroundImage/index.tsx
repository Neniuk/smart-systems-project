import React from "react";
import "./BackgroundImage.css";

interface BackgroundImageProps {
    children: React.ReactNode;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ children }) => {
    return <div className="background-image">{children}</div>;
};

export default BackgroundImage;
