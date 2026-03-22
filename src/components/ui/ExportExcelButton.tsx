"use client";

import React from "react";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { useDashboard } from "@/hooks/useDashboard";
import { formatPercent, formatDate } from "@/lib/format";

export default function ExportExcelButton() {
  const { data, loading, error } = useDashboard();

  const handleExport = async () => {
    if (!data || data.length === 0) return;

    const workbook = new ExcelJS.Workbook();

    // ===== 1️⃣ Aba Dados Brutos =====
    const wsDados = workbook.addWorksheet("Dados Brutos");
    const headers = Object.keys(data[0]);
    wsDados.columns = headers.map((h) => ({ header: h, key: h, width: 18 }));
    data.forEach((row) => wsDados.addRow(row));
    wsDados.getRow(1).eachCell((cell) => {
      cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
      cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "1F4E79" } };
      cell.alignment = { horizontal: "center" };
    });

    // ===== 2️⃣ Aba KPIs =====
    const wsKPI = workbook.addWorksheet("KPIs");
    wsKPI.columns = [
      { header: "Mês", key: "mes", width: 15 },
      { header: "Produtividade (%)", key: "produtividade", width: 18 },
      { header: "Eficiência (%)", key: "eficiencia", width: 15 },
      { header: "OEE (%)", key: "oee", width: 12 },
      { header: "Perdas (%)", key: "perdas", width: 12 },
      { header: "Cumprimento Meta (%)", key: "cumprimento", width: 20 },
    ];

    data.forEach((row) => {
      const produtividade = (row.produzido / row.meta) * 100;
      const eficiencia = ((row.tempoProducao - row.paradas) / row.tempoProducao) * 100;
      const oee = (produtividade * eficiencia) / 100;
      const perdas = row.perdas ? (row.perdas / row.meta) * 100 : 0;
      const cumprimento = (row.produzido / row.meta) * 100;

      wsKPI.addRow({
        mes: row.mes,
        produtividade: produtividade.toFixed(2),
        eficiencia: eficiencia.toFixed(2),
        oee: oee.toFixed(2),
        perdas: perdas.toFixed(2),
        cumprimento: cumprimento.toFixed(2),
      });
    });

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