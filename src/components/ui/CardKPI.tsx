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

const CardKPI: React.FC<CardKPIProps> = ({ title, value, change }) => {
  const numericValue = Number(value);
  const animatedValue = useCountUp(numericValue);

  const isPositive = change !== undefined && change >= 0;

  return (
    <div className="card">
      <h3>{title}</h3>

      <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
        {isNaN(numericValue) ? value : animatedValue}
      </p>

      {change !== undefined && (
        <span className={isPositive ? "text-success" : "text-danger"}>
          {isPositive ? "+" : ""}
          {change}%
        </span>
      )}
    </div>
  );
};

export default CardKPI;