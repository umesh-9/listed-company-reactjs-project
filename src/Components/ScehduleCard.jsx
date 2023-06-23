import React from "react";

const ScehduleCard = () => {
  return (
    <div
      div
      className=" mx-4 sm:ml-8  sm:w-2/5  h-64 bg-white rounded-2xl pr-8 "
    >
      <div className="flex ml-6 mt-4  pt-4 items-center justify-between ">
        <h1 className="text-black font-bold text-2xl">Today’s schedule</h1>
        <p className="text-gray-400">{`See All >`}</p>
      </div>
      <div className="border-l-4 border-lime-400 ml-6 mt-6">
        <h1 className="ml-4 text-gray-700">
          Meeting with suppliers from Kuta Bali
        </h1>
        <p className="ml-4 text-gray-400">14.00-15.00</p>
        <p className="ml-4 text-gray-400">at Sunset Road, Kuta, Bali </p>
      </div>
      <div className="border-l-4 border-blue-400 ml-6 mt-6">
        <h1 className="ml-4 text-gray-700">
          Check operation at Giga Factory 1
        </h1>
        <p className="ml-4 text-gray-400">18.00-20.00</p>
        <p className="ml-4 text-gray-400">at Central Jakarta </p>
      </div>
    </div>
  );
};

export default ScehduleCard;
