"use client";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ProductionChart({ labels, producao, meta }: any) {
  const data = labels.map((mes: string, i: number) => ({
    mes,
    producao: producao[i],
    meta: meta[i],
  }));

  return (
    <div className="card chart-container fade-in">
      <h3 style={{ marginBottom: "1rem" }}>Produção vs Meta</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="mes" />
          <Tooltip />

          <Line type="monotone" dataKey="producao" stroke="#2563eb" strokeWidth={3} />
          <Line type="monotone" dataKey="meta" stroke="#f97316" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}