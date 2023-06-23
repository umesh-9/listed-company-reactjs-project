import React from "react";
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between pt-6 text-center">
      <h1 className="text-black text-4xl font-bold">Dashboard</h1>
      <div className="flex pr-2 mt-2">
        <input
          type="text"
          className="rounded-md h-6 p-2 w-20  sm:w-auto bg-gray-100"
          placeholder="Search"
        />
        <AiOutlineSearch className="bg-white h-6 rounded-sm" />
        <AiOutlineBell className="hidden sm:block mr-4 h-8 text-center  ml-4 pb-3" />
        <img src="./assests/images/Mask Group.png" alt="" />
      </div>
    </div>
  );
};

export default DashboardHeader;
