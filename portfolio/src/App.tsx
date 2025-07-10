import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#082C38] text-[#FCD8B4] flex flex-col">
      {/* Header */}
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#C19976]">Mein Portfolio</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">Über mich</a>
          <a href="#projects" className="hover:underline">Projekte</a>
          <a href="#contact" className="hover:underline">Kontakt</a>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex-grow flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-5xl font-bold mb-4">Willkommen auf meiner Seite!</h2>
        <p className="max-w-xl mb-8">
          Ich bin Entwickler und baue moderne Webanwendungen mit React, TypeScript & TailwindCSS.
        </p>
        <a
          href="#projects"
          className="bg-[#C19976] text-[#082C38] px-6 py-3 rounded-full font-semibold hover:bg-[#FCD8B4] transition-colors"
        >
          Meine Projekte ansehen
        </a>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-sm text-[#C19976]">
        © {new Date().getFullYear()} Mein Name. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}
