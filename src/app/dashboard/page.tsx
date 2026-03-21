"use client";

import React, { useState } from "react";
import CardKPI from "@/components/ui/CardKPI";
import ProductionChart from "@/components/charts/ProductionChart";
import { useDashboard } from "@/hooks/useDashboard";
import { formatNumber, formatPercent } from "@/lib/format";
import Skeleton from "@/components/ui/Skeleton";

export default function DashboardPage() {
  const { data, loading, error } = useDashboard();
  const [mesSelecionado, setMesSelecionado] = useState("Todos");

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

  // 🔥 FILTRO
  const dadosFiltrados =
    mesSelecionado === "Todos"
      ? data
      : data.filter((item) => item.mes === mesSelecionado);

  // KPIs
  const totalProducao = dadosFiltrados.reduce(
    (acc, item) => acc + item.produzido,
    0
  );

  const totalMeta = dadosFiltrados.reduce(
    (acc, item) => acc + item.meta,
    0
  );

  const totalDefeitos = dadosFiltrados.reduce(
    (acc, item) => acc + item.defeitos,
    0
  );

  const eficiencia = totalMeta > 0 ? totalProducao / totalMeta : 0;

  // Gráfico
  const labels = dadosFiltrados.map((item) => item.mes);
  const producao = dadosFiltrados.map((item) => item.produzido);
  const meta = dadosFiltrados.map((item) => item.meta);

  return (
    <div className="container fade-in">

      {/* HEADER DA PÁGINA */}
      <div className="page-header">
        <div>
          <h1>Dashboard de Produção</h1>
          <p className="subtitle">Atualizado agora</p>
        </div>

        {/* FILTRO BONITO */}
        <select
          className="select"
          value={mesSelecionado}
          onChange={(e) => setMesSelecionado(e.target.value)}
        >
          <option value="Todos">Todos</option>
          {data.map((item) => (
            <option key={item.mes} value={item.mes}>
              {item.mes}
            </option>
          ))}
        </select>
      </div>

      {/* KPIs */}
      <div className="kpi-grid">
        <CardKPI
          title="Produção Total"
          value={formatNumber(totalProducao, 0)}
          type="producao"
        />

        <CardKPI
          title="Eficiência"
          value={formatPercent(eficiencia)}
          type="eficiencia"
        />

        <CardKPI
          title="Defeitos"
          value={formatNumber(totalDefeitos, 0)}
          type="defeitos"
        />
      </div>

      {/* GRÁFICO */}
      <div className="section">
        <ProductionChart
          labels={labels}
          producao={producao}
          meta={meta}
        />
      </div>

    </div>
  );
}