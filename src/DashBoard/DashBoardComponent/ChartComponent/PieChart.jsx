import React, { useEffect, useRef } from "react";
import { getStyle } from "@coreui/utils";
import { CChart } from "@coreui/react-chartjs";

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const handleColorSchemeChange = () => {
      const chartInstance = chartRef.current;
      if (chartInstance) {
        const { options } = chartInstance;

        if (options.plugins?.legend?.labels) {
          options.plugins.legend.labels.color = getStyle("--cui-body-color");
        }

        chartInstance.update();
      }
    };

    document.documentElement.addEventListener(
      "ColorSchemeChange",
      handleColorSchemeChange
    );

    return () => {
      document.documentElement.removeEventListener(
        "ColorSchemeChange",
        handleColorSchemeChange
      );
    };
  }, []);

  const data = {
    labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
    datasets: [
      {
        backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
        data: [40, 20, 80, 10],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: getStyle("--cui-body-color"),
        },
      },
    },
  };

  return (
    <>
      <h1>Pie Chart</h1>

      <div>
        <CChart type="doughnut" data={data} options={options} ref={chartRef} />
      </div>
    </>
  );
};

export default PieChart;
