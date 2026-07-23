import Link from "next/link";
import { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-8 bg-marigold" />
      <span className="font-mono text-xs uppercase tracking-widest text-teal">
        {children}
      </span>
    </div>
  );
}

export function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-sm bg-marigold px-6 py-3 text-sm font-semibold text-ink hover:bg-marigold-dark transition-colors focus-ring"
    >
      {children}
    </Link>
  );
}

export function GhostButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-sm border border-paper/30 px-6 py-3 text-sm font-semibold text-paper hover:border-marigold hover:text-marigold transition-colors focus-ring"
    >
      {children}
    </Link>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl sm:text-5xl text-ink">{value}</div>
      <div className="mt-1.5 text-sm text-charcoal/60 max-w-[16ch]">{label}</div>
    </div>
  );
}
