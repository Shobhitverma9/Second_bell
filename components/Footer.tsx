"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-ink text-paper/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="font-display text-xl text-paper mb-3">Second Bell</div>
          <p className="text-sm leading-relaxed text-paper/65">{t.footer.blurb}</p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-marigold mb-4">{t.footer.explore}</div>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/about" className="hover:text-paper transition-colors">{t.nav.about}</Link></li>
            <li><Link href="/programs" className="hover:text-paper transition-colors">{t.nav.programs}</Link></li>
            <li><Link href="/get-involved" className="hover:text-paper transition-colors">{t.nav.getInvolved}</Link></li>
            <li><Link href="/contact" className="hover:text-paper transition-colors">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-marigold mb-4">{t.footer.programs}</div>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/programs#back-to-class" className="hover:text-paper transition-colors">{t.footer.backToClass}</Link></li>
            <li><Link href="/programs#steady-income" className="hover:text-paper transition-colors">{t.footer.steadyIncome}</Link></li>
            <li><Link href="/programs#full-plate" className="hover:text-paper transition-colors">{t.footer.fullPlate}</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-marigold mb-4">{t.footer.reachUs}</div>
          <ul className="space-y-2.5 text-sm text-paper/65">
            <li>{t.contact.emailLabel}</li>
            <li>{t.contact.phoneLabel}</li>
            <li>{t.footer.trust}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-paper/50">
          <p>© {new Date().getFullYear()} Second Bell. {t.footer.rights}</p>
          <p>{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
