import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  AiFillDashboard,
  AiFillTags,
  AiOutlineSchedule,
  AiOutlineSetting,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const HeaderLayout = () => {
  const [toggle, setToggle] = useState(false);
  const currentActive = {
    color: "white",
  };
  return (
    <div className="sm:flex  ">
      <header className=" flex justify-between items-baseline  text-center px-2 py-4 sm:flex-col sm:w-1/3 sm:h-auto sm:pt-10  rounded-2xl m-4 bg-black text-white">
        <h1 className="text-4xl">Board.</h1>
        <nav className="  sm:block flex-col pl-8 hidden ">
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
        <div className="sm:hidden">
          {!toggle ? (
            <AiOutlineMenu
              className="text-3xl text-white"
              onClick={() => setToggle((prevToggle) => !prevToggle)}
            />
          ) : (
            <AiOutlineClose
              className="text-3xl text-white"
              onClick={() => setToggle((prevToggle) => !prevToggle)}
            />
          )}
          {toggle && (
            <div className="bg-black-gradient  absolute top-[60px] right-10 sidebar">
              <NavLink
                className=" mt-6 flex items-start hover:text-white justify-center text-xl text-gray-400 "
                to="."
                end
                style={({ isActive }) => (isActive ? currentActive : null)}
                onClick={() => setToggle((prevToggle) => !prevToggle)}
              >
                <AiFillDashboard className="mr-2 mt-1" /> Dashboard
              </NavLink>
              <NavLink
                className=" mt-6 flex items-start justify-center text-xl text-gray-400 hover:text-white"
                to="transactions"
                style={({ isActive }) => (isActive ? currentActive : null)}
                onClick={() => setToggle((prevToggle) => !prevToggle)}
              >
                <AiFillTags className="mr-2 mt-1" />
                Transactions
              </NavLink>
              <NavLink
                className="mt-6  mr-3 flex items-start justify-center text-xl text-gray-400 hover:text-white"
                to="Schedules"
                style={({ isActive }) => (isActive ? currentActive : null)}
                onClick={() => setToggle((prevToggle) => !prevToggle)}
              >
                <AiOutlineSchedule className="mr-2 mt-1" /> Schedules
              </NavLink>
              <NavLink
                className="mt-6  mr-12 flex items-start justify-center text-xl text-gray-400 hover:text-white"
                to="Users"
                style={({ isActive }) => (isActive ? currentActive : null)}
                onClick={() => setToggle((prevToggle) => !prevToggle)}
              >
                <AiOutlineUser className="mr-2 mt-1" />
                Users
              </NavLink>
              <NavLink
                className=" mt-6 mr-6 flex items-center justify-center text-xl text-gray-400 hover:text-white"
                to="Settings"
                style={({ isActive }) => (isActive ? currentActive : null)}
                onClick={() => setToggle((prevToggle) => !prevToggle)}
              >
                <AiOutlineSetting className="mr-2 mt-1" /> Settings
              </NavLink>
            </div>
          )}
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default HeaderLayout;
