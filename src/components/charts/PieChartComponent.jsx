import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const PieChartComponent = ({ pieData, pieDataKey }) => {
  return (
    <PieChart width={300} height={250} className="mx-auto">
      <Pie
        dataKey={pieDataKey}
        isAnimationActive={true}
        data={pieData}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#6366f1"
        label
      />
      <Tooltip />
    </PieChart>
  );
};

export default PieChartComponent;
