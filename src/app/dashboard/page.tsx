"use client";

import React from "react";
import CardKPI from "@/components/ui/CardKPI";
import ProductionChart from "@/components/charts/ProductionChart";
import { useDashboard } from "@/hooks/useDashboard";
import { formatNumber, formatPercent } from "@/lib/format";
import Skeleton from "@/components/ui/Skeleton";

export default function DashboardPage() {
  const { data, loading, error } = useDashboard();

  if (loading) {
    return (
      <div className="container">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  }

  if (error) return <p>Erro ao carregar dados</p>;

  // KPIs
  const totalProducao = data.reduce((acc, item) => acc + item.produzido, 0);
  const totalMeta = data.reduce((acc, item) => acc + item.meta, 0);
  const totalDefeitos = data.reduce((acc, item) => acc + item.defeitos, 0);

  const eficiencia = totalProducao / totalMeta;

  // Gráfico
  const labels = data.map((item) => item.mes);
  const producao = data.map((item) => item.produzido);
  const meta = data.map((item) => item.meta);

  return (
    <div className="container" style={{ paddingTop: "1rem" }}>
      
      {/* Título */}
      <h1>Dashboard de Produção</h1>
      <p style={{ color: "var(--secondary)" }}>Atualizado agora</p>

      {/* KPIs */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem",
          margin: "2rem 0",
        }}
      >
        <CardKPI
          title="Produção Total"
          value={formatNumber(totalProducao, 0)}
        />
        <CardKPI
          title="Eficiência"
          value={formatPercent(eficiencia)}
        />
        <CardKPI
          title="Defeitos"
          value={formatNumber(totalDefeitos, 0)}
        />
      </div>

      {/* Gráfico CORRETO */}
      <ProductionChart
        labels={labels}
        producao={producao}
        meta={meta}
      />

    </div>
  );
}