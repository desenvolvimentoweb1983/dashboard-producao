"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

interface Props {
  labels: string[];
  data: number[];
}

export default function ProductionChart({ labels, data }: Props) {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Produção",
        data,
        borderColor: "#1d4ed8",
        backgroundColor: "rgba(29, 78, 216, 0.2)",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="card">
      <Line data={chartData} />
    </div>
  );
}