"use client";

import "./globals.css";
import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="pt-BR">
      <body>
        <Header toggleSidebar={() => setOpen(!open)} />

        <div style={{ display: "flex" }}>
          <Sidebar open={open} />
          <main style={{ flex: 1, padding: "1rem" }}>{children}</main>
        </div>
      </body>
    </html>
  );
}