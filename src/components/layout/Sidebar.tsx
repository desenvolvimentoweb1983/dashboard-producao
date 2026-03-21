"use client";

import Link from "next/link";

export default function Sidebar({ open }: { open: boolean }) {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <h2 style={{ marginBottom: "1rem" }}>Dashboard</h2>

      <nav className="nav">
        <Link href="/dashboard">📊 Dashboard</Link>
        <Link href="/">🏠 Início</Link>
      </nav>
    </aside>
  );
}