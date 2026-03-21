"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ProductionChartProps {
  labels: string[];
  data: number[];
}

const ProductionChart: React.FC<ProductionChartProps> = ({ labels, data }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Produção",
        data,
        fill: true,
        backgroundColor: "rgba(29, 78, 216, 0.2)",
        borderColor: "rgba(29, 78, 216, 1)",
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Produção Mensal" },
    },
  };

  return (
    <div className="bg-card-bg p-4 rounded shadow">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default ProductionChart;