export default function ExcelPage() {
  return (
    <div className="container">

      <h1>Excel e Análise de Dados</h1>

      <p>
        Experiência com criação de planilhas, organização de dados e
        apoio a processos administrativos.
      </p>

      <div className="card">
        <h3>📊 Controle de Produção</h3>

        <p>
          Planilha com controle mensal, metas, cálculo de desempenho e
          organização de indicadores.
        </p>

        <ul style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <li>✔ Controle de produção mensal</li>
          <li>✔ Comparação com metas</li>
          <li>✔ Registro de defeitos</li>
          <li>✔ Organização de dados</li>
        </ul>

        <a
          href="/files/controle-producao.xlsx"
          className="btn-primary"
          download
        >
          📥 Baixar Planilha
        </a>
      </div>

    </div>
  );
}