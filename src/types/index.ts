export interface DashboardData {
  productionLines: ProductionLine[];
  overallEfficiency: number;
  totalOutput: number;
  alerts: Alert[];
}

export interface ProductionLine {
  id: string;
  name: string;
  efficiency: number;
  output: number;
  status: "running" | "stopped" | "maintenance";
}

export interface Alert {
  id: string;
  message: string;
  severity: "low" | "medium" | "high";
  timestamp: string;
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

export interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor?: string | string[];
  borderColor?: string;
  borderWidth?: number;
}

export interface BadgeProps {
  text: string;
  color?: "primary" | "secondary" | "accent";
}

export interface CardKPIProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
}