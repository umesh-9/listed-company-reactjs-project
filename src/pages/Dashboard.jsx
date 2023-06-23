import React from "react";
import DashboardHeader from "../Components/DashboardHeader";
import Cards from "../Components/Cards";
import LineGraph from "../Components/LineGraph";
import PieChart from "../Components/PieChart";
import ScehduleCard from "../Components/ScehduleCard";

const Dashboard = () => {
  return (
    <div className=" w-full bg-gray-100">
      <DashboardHeader />
      <Cards />
      <LineGraph />
      <div className="sm:flex my-4 ">
        <PieChart />
        <ScehduleCard />
      </div>
    </div>
  );
};

export default Dashboard;
