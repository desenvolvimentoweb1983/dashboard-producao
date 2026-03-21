export const formatNumber = (value: number, decimals = 2): string => {
  return value.toLocaleString("pt-BR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
};

export const formatPercent = (value: number, decimals = 1): string => {
  return `${(value * 100).toFixed(decimals).replace(".", ",")}%`;
};

export const formatCurrency = (value: number, currency = "BRL"): string => {
  return value.toLocaleString("pt-BR", { style: "currency", currency });
};

export const formatDate = (isoString: string, withTime = true): string => {
  const date = new Date(isoString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  if (withTime) {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }
  return `${day}/${month}/${year}`;
};

export const formatDuration = (minutes: number): string => {
  const h = Math.floor(minutes / 60).toString().padStart(2, "0");
  const m = (minutes % 60).toString().padStart(2, "0");
  return `${h}:${m}`;
};