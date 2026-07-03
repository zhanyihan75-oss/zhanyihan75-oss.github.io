"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggleTheme() {
    const nextIsDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/15 bg-transparent text-neutral-700 transition duration-200 ease-out hover:border-[#9b6a35] hover:text-[#9b6a35] focus:outline-none focus:ring-2 focus:ring-[#9b6a35]/40 dark:border-white/15 dark:text-neutral-300"
    >
      <Moon className="dark:hidden" size={18} />
      <Sun className="hidden dark:block" size={18} />
    </button>
  );
}
