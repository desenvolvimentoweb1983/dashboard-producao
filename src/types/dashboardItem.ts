// src/types/dashboardItem.ts
export interface DashboardItem {
  mes: string;              // Ex: "Março"
  produzido: number;        // Quantidade produzida
  meta: number;             // Quantidade planejada/meta
  defeitos: number;         // Número de defeitos
  tempoProducao: number;    // Horas de produção
  paradas: number;          // Horas de paradas
  perdas: number;           // Perdas unitárias
}