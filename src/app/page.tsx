import Link from "next/link";

export default function Home() {
  return (
    <div className="container home">

      {/* HERO */}
      <section className="hero">
        <img
          src="/images/WebDevLuis.png"
          alt="Logo WebDevLuis"
          className="hero-logo"
        />

        <h1>Dashboard de Produção Industrial</h1>

        <p>
          Projeto desenvolvido com foco em análise de dados, organização de
          informações e apoio à tomada de decisão.
        </p>

        <Link href="/dashboard" className="btn-primary">
          Acessar Dashboard
        </Link>

        <img
          src="/images/dashboard-preview.png"
          alt="Preview do dashboard"
          className="hero-image"
        />
      </section>

      {/* 🔥 HABILIDADES ADMINISTRATIVAS */}
      <section className="section">
        <h2>Habilidades Administrativas</h2>

        <div className="features">

          <div className="card">
            <h3>📊 Excel</h3>
            <p>
              Criação de planilhas, fórmulas, organização de dados e controle de informações.
            </p>
          </div>

          <div className="card">
            <h3>📁 Organização de Dados</h3>
            <p>
              Estruturação de informações para relatórios e processos administrativos.
            </p>
          </div>

          <div className="card">
            <h3>📈 Análise</h3>
            <p>
              Interpretação de dados para auxiliar na tomada de decisões.
            </p>
          </div>

        </div>
      </section>

      {/* 🔥 EXCEL (DIFERENCIAL) */}
      <section className="section">
        <h2>Projeto em Excel</h2>

        <div className="card">
          <h3>📊 Controle de Produção em Excel</h3>

          <p>
            Planilha desenvolvida para aprender excel na prática.
          </p>

          <a
            href="/files/controle-producao.xlsx"
            className="btn-primary"
            download
          >
            📥 Baixar Planilha Excel
          </a>
        </div>
      </section>

    </div>
  );
}