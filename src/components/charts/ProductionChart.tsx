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
        borderColor: "#1d4ed8",
        backgroundColor: "rgba(29, 78, 216, 0.2)",
        tension: 0.4,
      },
      {
        label: "Meta",
        data: meta,
        borderColor: "#f97316",
        borderDash: [5, 5],
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="card">
      <Line data={data} />
    </div>
  );
}