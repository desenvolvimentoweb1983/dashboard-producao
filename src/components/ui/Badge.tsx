import React from "react";
import { BadgeProps } from "../../types";

const Badge: React.FC<BadgeProps> = ({ text, color = "accent" }) => {
  const colorClasses = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    accent: "bg-accent text-white",
  };

  return (
    <span
      className={`badge ${colorClasses[color]}`}
      style={{ padding: "0.25rem 0.6rem", borderRadius: "16px" }}
    >
      {text}
    </span>
  );
};

export default Badge;