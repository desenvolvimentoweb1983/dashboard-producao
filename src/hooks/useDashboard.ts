"use client";

import { useEffect, useState } from "react";

export interface DashboardItem {
  mes: string;
  produzido: number;
  meta: number;
  defeitos: number;
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
        setData(json);
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