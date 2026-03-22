"use client";

import React, { useState } from "react";
import CardKPI from "@/components/ui/CardKPI";
import ProductionChart from "@/components/charts/ProductionChart";
import { useDashboard } from "@/hooks/useDashboard";
import { formatNumber, formatPercent } from "@/lib/format";
import Skeleton from "@/components/ui/Skeleton";

import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

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

  const totalMeta = dadosFiltrados.reduce((acc, item) => acc + item.meta, 0);

  const totalDefeitos = dadosFiltrados.reduce(
    (acc, item) => acc + item.defeitos,
    0
  );

  const eficiencia = totalMeta > 0 ? totalProducao / totalMeta : 0;

  // Gráfico
  const labels = dadosFiltrados.map((item) => item.mes);
  const producao = dadosFiltrados.map((item) => item.produzido);
  const meta = dadosFiltrados.map((item) => item.meta);

  // ===== FUNÇÃO EXPORTAR PLANILHA =====
  const exportExcel = async () => {
    if (!dadosFiltrados || dadosFiltrados.length === 0) return;

    const workbook = new ExcelJS.Workbook();

    // ===== Aba Dados Brutos =====
    const wsDados = workbook.addWorksheet("Dados Brutos");

    // Cabeçalho
    const headers = Object.keys(dadosFiltrados[0]);
    wsDados.columns = headers.map((h) => ({ header: h, key: h, width: 18 }));

    dadosFiltrados.forEach((row) => wsDados.addRow(row));

    // Formata cabeçalho
    wsDados.getRow(1).eachCell((cell) => {
      cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
      cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "1F4E79" } };
      cell.alignment = { horizontal: "center" };
    });

    // ===== Aba KPIs =====
    const wsKPI = workbook.addWorksheet("KPIs");
    wsKPI.columns = [
      { header: "Mês", key: "mes", width: 15 },
      { header: "Produção Total", key: "producao", width: 18 },
      { header: "Eficiência (%)", key: "eficiencia", width: 15 },
      { header: "Defeitos", key: "defeitos", width: 12 },
    ];

    dadosFiltrados.forEach((row) => {
      wsKPI.addRow({
        mes: row.mes,
        producao: row.produzido,
        eficiencia: formatPercent(row.produzido / row.meta),
        defeitos: row.defeitos,
      });
    });

    wsKPI.getRow(1).eachCell((cell) => {
      cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
      cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "1F4E79" } };
      cell.alignment = { horizontal: "center" };
    });

    // ===== Salvar arquivo =====
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    saveAs(blob, "Dashboard_Industrial.xlsx");
  };

  return (
    <div className="container fade-in">
      {/* HEADER DA PÁGINA */}
      <div className="page-header flex flex-col md:flex-row md:justify-between md:items-center gap-2">
        <div>
          <h1>Dashboard de Produção</h1>
          <p className="subtitle">Atualizado agora</p>
        </div>

        {/* FILTRO + BOTÃO EXPORTAR */}
        <div className="flex gap-2">
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

          <button className="btn-primary" onClick={exportExcel}>
            Exportar Excel
          </button>
        </div>
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
        <ProductionChart labels={labels} producao={producao} meta={meta} />
      </div>
    </div>
  );
}