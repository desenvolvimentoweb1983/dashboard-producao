"use client";

import { useEffect, useState } from "react";

// ✅ Tipo atualizado com propriedades adicionais
export interface DashboardItem {
  mes: string;
  produzido: number;
  meta: number;
  defeitos: number;
  tempoProducao: number; // necessário para cálculo de eficiência
  paradas: number;       // necessário para cálculo de eficiência
}

export function useDashboard() {
  const [data, setData] = useState<DashboardItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data/dados.json");

        if (!response.ok) throw new Error("Erro ao buscar dados");

        const json = await response.json();

        // 🔹 Mapeia os dados do JSON adicionando valores default para tempoProducao e paradas
        const mappedData: DashboardItem[] = json.map((item: any) => ({
          ...item,
          tempoProducao: 8, // valor default (pode ajustar se quiser)
          paradas: 0.3      // valor default (pode ajustar se quiser)
        }));

        setData(mappedData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}