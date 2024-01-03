import React from "react";

type HatCardProps = {
  // You can add specific props for your hats here if needed
};

const HatCard: React.FC<HatCardProps> = () => {
  return (
    <div className="flex justify-center items-center space-x-4 bg-gradient-to-r from-blue-200 to-green-200 p-4 rounded-xl shadow-md">
      {/* No Hat */}
      <div className="flex flex-col items-center">
        <div className="bg-red-200 rounded-full p-2">
          <img src="/path-to-no-hat-icon.png" alt="No Hat" />
        </div>
        <p>No Hat</p>
      </div>
      
      {/* Cap */}
      <div className="flex flex-col items-center">
        <img src="/path-to-cap.png" alt="Cap" className="rounded-md shadow-sm" />
        <p>Cap</p>
      </div>
      
      {/* Autumn Hat */}
      <div className="flex flex-col items-center">
        <img src="/path-to-autumn-hat.png" alt="Autumn Hat" className="rounded-md shadow-sm" />
        <p>Autumn Hat</p>
      </div>
      
      {/* Winter Hat */}
      <div className="flex flex-col items-center">
        <img src="/path-to-winter-hat.png" alt="Winter Hat" className="rounded-md shadow-sm" />
        <p>Winter Hat</p>
      </div>
    </div>
  );
};

export default HatCard;
