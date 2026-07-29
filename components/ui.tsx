import Link from "next/link";
import { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-8 bg-marigold" />
      <span className="font-mono text-xs uppercase tracking-widest text-teal font-bold">
        {children}
      </span>
    </div>
  );
}

export function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-sm bg-marigold px-6 py-3 text-sm font-bold text-white hover:bg-marigold-dark transition-colors focus-ring ${className}`}
    >
      {children}
    </Link>
  );
}

export function GhostButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-sm border border-paper/30 px-6 py-3 text-sm font-bold text-paper hover:border-marigold hover:text-marigold transition-colors focus-ring ${className}`}
    >
      {children}
    </Link>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-start">
      <div className="font-display text-5xl sm:text-7xl font-extrabold tracking-tighter text-marigold mb-2">{value}</div>
      <div className="text-sm sm:text-base font-semibold text-charcoal/80 uppercase tracking-wide">{label}</div>
    </div>
  );
}
