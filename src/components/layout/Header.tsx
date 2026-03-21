"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="header">
      
      {/* LOGO */}
      <div className="logo">
        📊 Dashboard
      </div>

      {/* NAV DESKTOP */}
      <nav className="nav">
        <Link href="/">Início</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>

      {/* BOTÃO MOBILE */}
      <button className="menu-btn" onClick={toggleMenu}>
        ☰
      </button>

      {/* NAV MOBILE */}
      {open && (
        <div className="mobile-nav">
          <Link href="/" onClick={closeMenu}>
            Início
          </Link>
          <Link href="/dashboard" onClick={closeMenu}>
            Dashboard
          </Link>
        </div>
      )}

    </header>
  );
}