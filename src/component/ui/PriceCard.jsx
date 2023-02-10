import React from "react";

const PriceCard = ({ text, price }) => {
  return (
    <div className="bg-gray-50 p-8 mx-2 rounded-2xl text-center text-lg md:text-xl">
      <p className="font-bold">{text}</p>
      <p className="font-lato font-bold text-indigo-400 text-lg md:text-2xl">KRW {price}</p>
    </div>
  );
};

export default PriceCard;
