import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "trainers", label: "Trainers" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const shouldDark = stored ? stored === "dark" : prefersDark;

    setIsDark(shouldDark);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-neutral-800/70 bg-black/80 backdrop-blur-md dark:border-neutral-700/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="leading-tight">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
              Fitness
            </p>
            <p className="text-sm font-medium text-zinc-100">Sports Center</p>
          </div>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6 text-sm font-medium uppercase tracking-wide">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-zinc-300 transition hover:text-amber-400"
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-zinc-100 shadow-md transition hover:border-amber-500 hover:text-amber-400"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="mr-1 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-zinc-100 shadow-md transition hover:border-amber-500 hover:text-amber-400"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-zinc-100 shadow-md transition hover:border-amber-500 hover:text-amber-400"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-neutral-800/70 bg-black/95 px-4 py-3 sm:px-6 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium uppercase tracking-wide">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="rounded-md px-2 py-2 text-left text-zinc-200 transition hover:bg-neutral-900 hover:text-amber-400"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

