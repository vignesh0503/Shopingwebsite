import React from "react";
import "../../DashBoard.css";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

const Chart = () => {
  return (
    <div>
      <div className="Chart-section">
        <div className="BarChart-section">
          <BarChart />
        </div>
        <div className="PieChart-section">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Chart;
