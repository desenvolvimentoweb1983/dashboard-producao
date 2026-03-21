"use client";

import React from "react";

interface Props {
  open: boolean;
}

export default function Sidebar({ open }: Props) {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <h2>Dashboard</h2>

      <nav className="flex-col" style={{ gap: "1rem", marginTop: "1rem" }}>
        <a href="/dashboard">Visão Geral</a>
        <a href="#">Produção</a>
        <a href="#">Relatórios</a>
      </nav>
    </aside>
  );
}