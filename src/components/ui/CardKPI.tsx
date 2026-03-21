"use client";

import React, { useEffect, useState } from "react";
import { CardKPIProps } from "@/types";

function useCountUp(value: number, duration = 1000) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return display;
}

const icons: Record<string, string> = {
  producao: "📦",
  eficiencia: "📈",
  defeitos: "⚠️",
};

const CardKPI: React.FC<CardKPIProps> = ({ title, value, type }) => {
  const numericValue = Number(value);
  const animatedValue = useCountUp(numericValue);

  return (
    <div className="card fade-in">
  <div className="flex-between">
    <span className="kpi-title">{title}</span>
    <span style={{ fontSize: "1.4rem" }}>{icons[type || "producao"]}</span>
  </div>

  <p className="kpi-value">
    {isNaN(numericValue) ? value : animatedValue}
  </p>
</div>
  );
};

export default CardKPI;