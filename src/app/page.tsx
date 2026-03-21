"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">

        {/* LOGO */}
        <img
          src="/images/WebDevLuis.png"
          alt="WebDevLuis Logo"
          className="hero-logo"
        />

        <h1>Dashboard de Produção Industrial</h1>

        <p>
          Visualize KPIs, eficiência e desempenho da produção em tempo real
          com um dashboard moderno e interativo.
        </p>

        <Link href="/dashboard" className="btn-primary">
          Acessar Dashboard
        </Link>

        {/* PREVIEW DO DASHBOARD */}
        <img
          src="/images/dashboard-preview.png"
          alt="Preview do Dashboard"
          className="hero-image"
        />

      </section>

      {/* FEATURES */}
      <section className="features">

        <div className="card">
          <h3>📊 KPIs em tempo real</h3>
          <p>Produção, eficiência e defeitos em um só lugar.</p>
        </div>

        <div className="card">
          <h3>📈 Gráficos interativos</h3>
          <p>Compare meta vs produção com facilidade.</p>
        </div>

        <div className="card">
          <h3>⚡ Alta performance</h3>
          <p>Aplicação rápida com Next.js</p>
        </div>

      </section>
    </main>
  );
}