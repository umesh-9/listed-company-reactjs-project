import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Piechart = () => {
  const [state, setState] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setData(data.products[state].items));
  }, [state]);
  const productDetails = data.map((product, index) => {
    return (
      <div key={index}>
        <h1 className="font-bold">{product.name}</h1>
        <h3 className="text-gray-400 sm:mb-3">{product.percentage}%</h3>
      </div>
    );
  });
  return (
    <div div className="    sm:w-1/2 h-64 bg-white rounded-2xl mx-4 mb-4 ">
      <div className="flex ml-6 mt-4  pt-1 items-center justify-between">
        <h1 className="text-black font-bold text-2xl">Top Products</h1>
        <select
          className="mr-6 mt-1 outline-none w-40 text-gray-400 rounded-sm px-3 py-1 cursor-pointer"
          onChange={(e) => setState(Number(e.target.value))}
        >
          <option value="0">May-June 2023</option>
          <option value="1">June-July 2023</option>
          <option value="2">July-Agust 2023</option>
        </select>
      </div>
      <div className=" flex items-center ">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            //   label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <div className=" sm:mx-20">{productDetails}</div>
      </div>
    </div>
  );
};

export default Piechart;
