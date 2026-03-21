"use client";

import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/layout/Header";
import CardKPI from "../../components/ui/CardKPI";
import ProductionChart from "../../components/charts/ProductionChart";
import Select from "../../components/ui/Select";
import { useDashboard } from "../../hooks/useDashboard";

export default function DashboardPage() {
  const {
    totalProduzido,
    eficiencia,
    defeitos,
    meses,
    mesSelecionado,
    setMesSelecionado,
    dadosFiltrados,
  } = useDashboard();

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="p-6 space-y-6 overflow-auto">

          {/* Filtro */}
          <div className="flex justify-end">
            <Select
              value={mesSelecionado}
              onChange={setMesSelecionado}
              options={meses}
            />
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CardKPI title="Produção Total" value={totalProduzido} />
            <CardKPI title="Eficiência" value={`${eficiencia}%`} />
            <CardKPI title="Defeitos" value={defeitos} />
          </div>

          {/* Gráfico */}
          <ProductionChart dados={dadosFiltrados} />

        </main>
      </div>
    </div>
  );
}