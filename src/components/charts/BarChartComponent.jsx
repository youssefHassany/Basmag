import React, { useContext } from "react";
import {
  Tooltip,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const BarChartComponent = ({ dataKeyOne, dataKeyTwo, targetData }) => {
  return (
    <BarChart
      className="flex items-center justify-center"
      width={300}
      height={250}
      data={targetData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={dataKeyOne} fill="#1a1a1a" />
      <Bar dataKey={dataKeyTwo} fill="#6366f1" />
    </BarChart>
  );
};

export default BarChartComponent;
