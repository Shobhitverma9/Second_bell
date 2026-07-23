"use client";

import { useLanguage } from "@/lib/i18n";

const rows = [
  { name: "Priya S.", cls: { en: "Class 6", hi: "कक्षा 6" }, status: "withdrawn" },
  { name: "Arjun M.", cls: { en: "Class 9", hi: "कक्षा 9" }, status: "present" },
  { name: "Fatima K.", cls: { en: "Class 4", hi: "कक्षा 4" }, status: "restored" },
  { name: "Ravi P.", cls: { en: "Class 8", hi: "कक्षा 8" }, status: "withdrawn" },
  { name: "Meena D.", cls: { en: "Class 3", hi: "कक्षा 3" }, status: "restored" },
  { name: "Sanjay T.", cls: { en: "Class 10", hi: "कक्षा 10" }, status: "present" },
];

const statusText = {
  en: {
    withdrawn: "Fee pending — withdrawn",
    present: "Present",
    restored: "Back in class",
  },
  hi: {
    withdrawn: "फ़ीस बकाया — निकाला गया",
    present: "उपस्थित",
    restored: "क्लास में वापस",
  },
};

const statusClass: Record<string, string> = {
  withdrawn: "text-clay strike",
  present: "text-teal",
  restored: "text-marigold-dark font-semibold",
};

export default function Register() {
  const { lang, t } = useLanguage();

  return (
    <div className="rounded-sm border border-ink/10 bg-paper shadow-[0_1px_0_rgba(22,35,63,0.06)] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 bg-ink text-paper">
        <span className="font-mono text-xs tracking-widest uppercase">
          {t.home.registerTitle}
        </span>
        <span className="font-mono text-xs text-marigold">{t.home.registerRoll}</span>
      </div>
      <div className="bg-rule-lines">
        {rows.map((r, i) => (
          <div
            key={r.name}
            className="flex items-center justify-between px-5 py-2.5 text-sm border-b border-ink/5 last:border-0"
          >
            <span className="font-mono text-ink/40 w-8">{String(i + 1).padStart(2, "0")}</span>
            <span className="flex-1 text-charcoal font-medium">{r.name}</span>
            <span className="w-20 text-charcoal/60 hidden sm:block">{r.cls[lang]}</span>
            <span className={`text-xs ${statusClass[r.status]}`}>{statusText[lang][r.status as keyof typeof statusText["en"]]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
