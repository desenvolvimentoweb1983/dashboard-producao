"use client";

import "./globals.css";
import Header from "@/components/layout/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>

        {/* HEADER COM NAVEGAÇÃO */}
        <Header />

        {/* CONTEÚDO */}
        <main className="main">
          {children}

          <footer className="footer">
            <p>© 2026 Dashboard Industrial • WebDevLuis</p>
          </footer>
        </main>

      </body>
    </html>
  );
}