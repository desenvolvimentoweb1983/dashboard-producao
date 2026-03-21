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
  producao: number[];
  meta: number[];
}

export default function ProductionChart({ labels, producao, meta }: Props) {
  const data = {
    labels,
    datasets: [
      {
  label: "Produção",
  data: producao,
  borderColor: "#3b82f6",
  backgroundColor: "rgba(59, 130, 246, 0.15)",
  fill: true,
  tension: 0.4,
},
{
  label: "Meta",
  data: meta,
  borderColor: "#f97316",
  borderDash: [6, 6],
  tension: 0.4,
},
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="card">
      <Line data={data} options={options} />
    </div>
  );
}