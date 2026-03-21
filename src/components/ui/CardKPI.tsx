import React from "react";
import { CardKPIProps } from "../../types";

const CardKPI: React.FC<CardKPIProps> = ({ title, value, change, icon }) => {
  const isPositive = change !== undefined && change >= 0;

  return (
    <div className="card flex-col" style={{ gap: "0.5rem" }}>
      <div className="flex-between">
        {icon && <div className="icon">{icon}</div>}
        <div className={`text-sm font-semibold ${isPositive ? "text-green-500" : "text-red-500"}`}>
          {change !== undefined ? (isPositive ? `+${change}%` : `${change}%`) : ""}
        </div>
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-2xl font-extrabold">{value}</p>
    </div>
  );
};

export default CardKPI;