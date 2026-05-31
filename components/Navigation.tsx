"use client";

import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-primary/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="font-bold text-xl gradient-text">
          CallMeAmps
        </a>

        <div className="hidden md:flex gap-6">
          <a href="#featured" className="text-slate-400 hover:text-cyan-400">
            Featured
          </a>
          <a href="#projects" className="text-slate-400 hover:text-cyan-400">
            All Projects
          </a>
          <a href="https://github.com/Callmeamps" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400">
            GitHub
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-400"
        >
          ☰
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-primary border-b border-slate-800 p-4 md:hidden">
            <a href="#featured" className="block py-2 text-slate-400 hover:text-cyan-400">
              Featured
            </a>
            <a href="#projects" className="block py-2 text-slate-400 hover:text-cyan-400">
              All Projects
            </a>
            <a href="https://github.com/Callmeamps" target="_blank" rel="noopener noreferrer" className="block py-2 text-slate-400 hover:text-cyan-400">
              GitHub
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
