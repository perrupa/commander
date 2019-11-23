import React from "react";
import "./Frame.css";

export function Frame({ children }) {
  return (
    <main className="Frame">
      <h1>Commander</h1>
      {children}
    </main>
  );
}
