import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const ShipmentPerformanceChart = () => {
  const data = {
    labels: [
      "1",
      "3",
      "5",
      "7",
      "9",
      "11",
      "13",
      "15",
      "17",
      "19",
      "21",
      "23",
      "25",
      "27",
      "29",
    ], // Days with gaps
    datasets: [
      {
        label: "Success Rate",
        data: [0, 10, 20, 30, 40, 50, 60, 70, 75, 80, 85, 90, 93, 96, 98], // Gradual growth for success rate
        borderColor: "lightgreen",
        backgroundColor: "rgba(0, 128, 0, 0.2)",
        fill: false,
        tension: 0.1, // Smoothing the line
      },
      {
        label: "Efficiency",
        data: [0, 5, 15, 25, 35, 45, 55, 65, 70, 75, 80, 85, 87, 89, 90], // Gradual growth for efficiency
        borderColor: "skyblue",
        backgroundColor: "rgba(135, 206, 250, 0.2)",
        fill: false,
        tension: 0.1, // Smoothing the line
      },
      {
        label: "Delay Rate",
        data: [0, 3, 5, 8, 12, 15, 20, 22, 25, 28, 30, 28, 25, 20, 15], // Gradual growth then slight decrease for delay rate
        borderColor: "orange",
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        fill: false,
        tension: 0.1, // Smoothing the line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
        },
      },
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default ShipmentPerformanceChart;
