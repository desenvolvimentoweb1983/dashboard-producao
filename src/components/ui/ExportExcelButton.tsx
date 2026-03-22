"use client";

import React from "react";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { useDashboard } from "@/hooks/useDashboard";
import { formatNumber, formatPercent, formatDate } from "@/lib/format";

export default function ExportExcelButton() {
  const { data, loading, error } = useDashboard();

  const handleExport = async () => {
    if (!data || data.length === 0) return;

    const workbook = new ExcelJS.Workbook();

    // ===== 1️⃣ Aba Dados Brutos =====
    const wsDados = workbook.addWorksheet("Dados Brutos");

    // Cabeçalho automático
    const headers = Object.keys(data[0]);
    wsDados.columns = headers.map((h) => ({ header: h, key: h, width: 18 }));

    // Adiciona os dados
    data.forEach((row) => wsDados.addRow(row));

    // Formata cabeçalho
    wsDados.getRow(1).eachCell((cell) => {
      cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
      cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "1F4E79" } };
      cell.alignment = { horizontal: "center" };
    });

    // ===== 2️⃣ Aba KPIs =====
    const wsKPI = workbook.addWorksheet("KPIs");
    wsKPI.columns = [
      { header: "Data", key: "Data", width: 15 },
      { header: "Produtividade (%)", key: "Produtividade", width: 18 },
      { header: "Eficiência (%)", key: "Eficiencia", width: 15 },
      { header: "OEE (%)", key: "OEE", width: 12 },
      { header: "Perdas (%)", key: "Perdas", width: 12 },
      { header: "Cumprimento Meta (%)", key: "Cumprimento", width: 20 },
    ];

    data.forEach((row) => {
      const produtividade = ((row.produzido / row.meta) * 100).toFixed(2);
      const eficiencia = (((row["tempoProducao"] - row.paradas) / row["tempoProducao"]) * 100).toFixed(2);
      const oee = ((produtividade * eficiencia / 100).toFixed(2));
      const perdas = ((row.perdas / row.meta) * 100).toFixed(2);
      const cumprimento = ((row.produzido / row.meta) * 100).toFixed(2);

      wsKPI.addRow({
        Data: row.data,
        Produtividade: produtividade,
        Eficiencia: eficiencia,
        OEE: oee,
        Perdas: perdas,
        Cumprimento: cumprimento,
      });
    });

    // Formata cabeçalho KPIs
    wsKPI.getRow(1).eachCell((cell) => {
      cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
      cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "1F4E79" } };
      cell.alignment = { horizontal: "center" };
    });

    // ===== 3️⃣ Salvar arquivo =====
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    saveAs(blob, "Dashboard_Industrial.xlsx");
  };

  if (loading) return <button className="btn-primary">Carregando...</button>;
  if (error) return <p>Erro ao gerar planilha</p>;

  return (
    <button className="btn-primary" onClick={handleExport}>
      Exportar Planilha Excel
    </button>
  );
}