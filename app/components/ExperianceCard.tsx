import React from "react";
const experiance = {
  years: 25,
  title: "Years Of experience",
  description:
    "Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency",
};
const ExperianceCard = () => {
  return (
    <div className="h-full flex flex-col items-left justify-center p-8 space-y-2 lg:space-y-8 rounded-lg shadow-lg bg-gradient-to-b from-dark to-lightBlue">
      <h3 className="text-5xl lg:text-9xl font-bold text-white mb-2">{experiance.years}</h3>
      <p className="text-gray-300 text-2xl lg:text-5xl">{experiance.title}</p>
      <p className="text-gray-300">{experiance.description}</p>
    </div>
  );
};
export default ExperianceCard;