import { useEffect, useState } from "react";
import { navItems } from "../data/navItems";
import { useScrollSpy } from "../hooks/useScrollSpy";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(navItems.map((n) => n.id));

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = (id: string) =>
    `relative font-medium transition-colors ${
      activeId === id ? "text-redDeep" : "text-ink/70 hover:text-ink"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-content items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#home"
          className="flex items-center gap-2.5 font-display text-base font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo.png"
            alt="Coke Zero Study logo"
            className="h-8 w-8 rounded-lg object-cover shadow-sm"
          />
          <span>Coke Zero Study</span>
        </a>

        {/* desktop links */}
        <ul className="hidden items-center gap-6 text-sm lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={linkClass(item.id)}>
                {item.label}
                {activeId === item.id && (
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-red" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-paper lg:hidden"
        >
          <ul className="mx-auto flex max-w-content flex-col px-5 py-2 sm:px-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-border/60 py-3 text-sm ${
                    activeId === item.id
                      ? "font-semibold text-redDeep"
                      : "text-ink/80"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
