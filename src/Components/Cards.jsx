import React from "react";
import {
  AiOutlineDownload,
  AiFillTags,
  AiFillLike,
  AiOutlineUsergroupDelete,
} from "react-icons/ai";
const Cards = () => {
  return (
    <div className="md:flex">
      <div className="bg-green-100 rounded-xl p-8 m-4 md:w-52 ">
        <AiOutlineDownload className="ml-44 pt-2  text-3xl md:ml-36 md:text-2xl" />
        <h3 className="text-black font-semibold text-1xl">Total Revenues</h3>
        <h1 className="text-black font-bold text-3xl">$2,129,430</h1>
      </div>
      <div className="bg-orange-100 rounded-xl p-8 m-4 md:w-52">
        <AiFillTags className="ml-44 pt-2  text-3xl md:ml-36 md:text-2xl" />
        <h3 className="text-black font-semibold text-1xl">
          Total Transactions
        </h3>
        <h1 className="text-black font-bold text-3xl">1,520</h1>
      </div>
      <div className="bg-red-100 rounded-xl p-8 m-4 md:w-52">
        <AiFillLike className="ml-44 pt-2  text-3xl md:ml-36 md:text-2xl" />
        <h3 className="text-black font-semibold text-1xl">Total Likes</h3>
        <h1 className="text-black font-bold text-3xl">9,721</h1>
      </div>
      <div className="bg-violet-100 rounded-xl p-8 m-4 md:w-52">
        <AiOutlineUsergroupDelete className="ml-44 pt-2  text-3xl md:ml-36 md:text-2xl" />
        <h3 className="text-black font-semibold text-1xl">Total Users</h3>
        <h1 className="text-black font-bold text-3xl">892</h1>
      </div>
    </div>
  );
};

export default Cards;
