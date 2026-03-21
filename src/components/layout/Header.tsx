"use client";

import React from "react";

interface Props {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: Props) {
  return (
    <header className="header">
      <button onClick={toggleSidebar}>☰</button>
      <h3>Dashboard Industrial</h3>
    </header>
  );
}