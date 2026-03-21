"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="header">

      <div className="logo">
        <strong>📊 Dashboard</strong>
      </div>

      <nav className="nav">
        <Link href="/">Início</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>

    </header>
  );
}