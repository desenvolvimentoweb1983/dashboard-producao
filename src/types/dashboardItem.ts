export interface DashboardItem {
  mes: string;
  produzido: number;
  meta: number;
  defeitos: number;
  tempoProducao: number; // agora existe
  paradas: number;       // agora existe
  perdas?: number;       // opcional
}