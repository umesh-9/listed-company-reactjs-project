import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineGraph = () => {
  const [state, setState] = useState(0);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => setData(data.items[state].items));
  }, [state]);
  return (
    <div className=" h-94  w-12/12 box-border bg-white rounded-2xl ml-4">
      <div className="flex ml-6 mt-4 mb-8 pt-4 items-center">
        <h1 className="text-black font-bold text-2xl">Activites</h1>
        <select
          className="ml-3 mt-1 outline-none w-40 text-gray-400 rounded-sm px-3 py-1 cursor-pointer"
          onChange={(e) => setState(Number(e.target.value))}
        >
          <option value="0">May-June 2023</option>
          <option value="1">June-July 2023</option>
          <option value="2">July-Agust 2023</option>
        </select>
      </div>
      <div className="overflow-hidden  ">
        <LineChart
          width={900}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="#858585" vertical={false} />
          <XAxis dataKey="name" axisLine={false} />
          <YAxis axisLine={false} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="guests"
            stroke="#E9A0A0"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="users" stroke="#9BDD7C" />
        </LineChart>
      </div>
    </div>
  );
};

export default LineGraph;
