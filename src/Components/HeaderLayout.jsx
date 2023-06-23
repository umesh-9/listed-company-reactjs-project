import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  AiFillDashboard,
  AiFillTags,
  AiOutlineSchedule,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";

const HeaderLayout = () => {
  const currentActive = {
    color: "white",
  };
  return (
    <div className="sm:flex ">
      <header className=" text-center sm:w-1/3 sm:h-auto pt-10  rounded-2xl m-4 bg-black text-white">
        <h1 className="text-4xl">Board.</h1>
        <nav className="  sm:block flex-col">
          <NavLink
            className=" mt-6 flex items-start hover:text-white justify-center text-xl text-gray-400 "
            to="."
            end
            style={({ isActive }) => (isActive ? currentActive : null)}
          >
            <AiFillDashboard className="mr-2 mt-1" /> Dashboard
          </NavLink>
          <NavLink
            className=" mt-6 flex items-start justify-center text-xl text-gray-400 hover:text-white"
            to="transactions"
            style={({ isActive }) => (isActive ? currentActive : null)}
          >
            <AiFillTags className="mr-2 mt-1" />
            Transactions
          </NavLink>
          <NavLink
            className="mt-6  mr-3 flex items-start justify-center text-xl text-gray-400 hover:text-white"
            to="Schedules"
            style={({ isActive }) => (isActive ? currentActive : null)}
          >
            <AiOutlineSchedule className="mr-2 mt-1" /> Schedules
          </NavLink>
          <NavLink
            className="mt-6  mr-12 flex items-start justify-center text-xl text-gray-400 hover:text-white"
            to="Users"
            style={({ isActive }) => (isActive ? currentActive : null)}
          >
            <AiOutlineUser className="mr-2 mt-1" />
            Users
          </NavLink>
          <NavLink
            className=" mt-6 mr-6 flex items-center justify-center text-xl text-gray-400 hover:text-white"
            to="Settings"
            style={({ isActive }) => (isActive ? currentActive : null)}
          >
            <AiOutlineSetting className="mr-2 mt-1" /> Settings
          </NavLink>
          <NavLink
            className=" mt-96 flex items-center justify-center text-xl text-gray-400 hover:text-white"
            to="/"
          >
            Help
          </NavLink>
          <NavLink
            className=" pb-10 flex items-center justify-center text-xl text-gray-400 hover:text-white"
            to="/"
          >
            Contact Us
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default HeaderLayout;
