"use client";

import { useState, useEffect } from "react";
import { calcularEficiencia } from "../utils/calculos";

export function useDashboard() {
  const [dados, setDados] = useState<any[]>([]);
  const [mesSelecionado, setMesSelecionado] = useState("Jan");

  // carregar dados do JSON público
  useEffect(() => {
    fetch("/data/dados.json")
      .then((res) => res.json())
      .then((json) => setDados(json))
      .catch(console.error);
  }, []);

  const meses = dados.map((d) => d.mes);

  const dadosFiltrados = dados.filter((d) => d.mes === mesSelecionado);

  const totalProduzido = dadosFiltrados.reduce((acc, d) => acc + d.produzido, 0);
  const defeitos = dadosFiltrados.reduce((acc, d) => acc + d.defeitos, 0);
  const eficiencia =
    dadosFiltrados.length > 0
      ? calcularEficiencia(dadosFiltrados[0].produzido, dadosFiltrados[0].meta)
      : 0;

  return {
    totalProduzido,
    eficiencia,
    defeitos,
    meses,
    mesSelecionado,
    setMesSelecionado,
    dadosFiltrados,
  };
}