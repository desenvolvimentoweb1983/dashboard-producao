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
    <div className="card">
      <div className="flex-between">
        <h3>{title}</h3>
        <span style={{ fontSize: "1.5rem" }}>{icons[type || "producao"]}</span>
      </div>

      <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
        {isNaN(numericValue) ? value : animatedValue}
      </p>
    </div>
  );
};

export default CardKPI;