"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/programs", label: t.nav.programs },
    { href: "/get-involved", label: t.nav.getInvolved },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur text-paper border-b border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5 group focus-ring rounded shrink-0">
            <BellMark />
            <span className="font-display text-xl tracking-tight">
              Second Bell
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-paper/80 hover:text-marigold transition-colors focus-ring rounded"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <LangToggle lang={lang} setLang={setLang} />
            <Link
              href="/get-involved#donate"
              className="inline-flex items-center rounded-sm bg-marigold px-5 py-2.5 text-sm font-semibold text-ink hover:bg-marigold-dark transition-colors focus-ring"
            >
              {t.nav.donate}
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LangToggle lang={lang} setLang={setLang} compact />
            <button
              className="p-2 focus-ring rounded"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <div className="w-6 space-y-1.5">
                <span className={`block h-0.5 bg-paper transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 bg-paper transition-opacity ${open ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-paper transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <nav className="md:hidden pb-5 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-paper/85 hover:text-marigold border-b border-white/5"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/get-involved#donate"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center rounded-sm bg-marigold px-5 py-2.5 text-sm font-semibold text-ink"
            >
              {t.nav.donate}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

function LangToggle({
  lang,
  setLang,
}: {
  lang: "en" | "hi";
  setLang: (l: "en" | "hi") => void;
  compact?: boolean;
}) {
  return (
    <div
      className="flex items-center rounded-full border border-white/20 p-0.5 text-xs font-mono"
      role="group"
      aria-label="Language selector"
    >
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-2.5 py-1 rounded-full transition-colors focus-ring ${
          lang === "en" ? "bg-marigold text-ink" : "text-paper/70 hover:text-paper"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("hi")}
        aria-pressed={lang === "hi"}
        className={`px-2.5 py-1 rounded-full transition-colors focus-ring ${
          lang === "hi" ? "bg-marigold text-ink" : "text-paper/70 hover:text-paper"
        }`}
      >
        हि
      </button>
    </div>
  );
}

function BellMark() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <path
        d="M13 3c-3.3 0-5.5 2.4-5.5 6v3.2c0 1-.4 2-1.1 2.7L5 16.4c-.6.6-.2 1.6.6 1.6h14.8c.8 0 1.2-1 .6-1.6l-1.4-1.5a3.8 3.8 0 0 1-1.1-2.7V9c0-3.6-2.2-6-5.5-6Z"
        stroke="#F2A93B"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M10.5 20.5a2.5 2.5 0 0 0 5 0" stroke="#F2A93B" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
