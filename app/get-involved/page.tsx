"use client";

import { PrimaryButton } from "@/components/ui";
import DonateWidget from "@/components/DonateWidget";
import { useLanguage } from "@/lib/i18n";

export default function GetInvolved() {
  const { t } = useLanguage();
  const g = t.getInvolved;

  return (
    <main>
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-24">
          <span className="font-mono text-xs uppercase tracking-widest text-teal-light">{g.kicker}</span>
          <h1 className="font-display text-4xl sm:text-5xl max-w-2xl leading-tight mt-3">{g.title}</h1>
        </div>
      </section>

      {/* DONATE */}
      <section id="donate" className="bg-paper scroll-mt-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20">
          <span className="font-mono text-xs text-teal uppercase tracking-widest">{g.donateTag}</span>
          <h2 className="font-display text-3xl text-ink mt-2 mb-3">{g.donateTitle}</h2>
          <p className="text-charcoal/70 max-w-2xl mb-10 leading-relaxed">{g.donateBody}</p>

          <DonateWidget />
        </div>
      </section>

      {/* VOLUNTEER */}
      <section id="volunteer" className="bg-paper-dim border-y border-ink/10 scroll-mt-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20">
          <span className="font-mono text-xs text-teal uppercase tracking-widest">{g.volTag}</span>
          <h2 className="font-display text-3xl text-ink mt-2 mb-3">{g.volTitle}</h2>
          <p className="text-charcoal/70 max-w-2xl mb-10 leading-relaxed">{g.volBody}</p>
          <div className="grid sm:grid-cols-3 gap-8">
            <VolCard title={g.vol1t} body={g.vol1b} />
            <VolCard title={g.vol2t} body={g.vol2b} />
            <VolCard title={g.vol3t} body={g.vol3b} />
          </div>
        </div>
      </section>

      {/* PARTNER */}
      <section id="partner" className="bg-paper scroll-mt-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20">
          <span className="font-mono text-xs text-teal uppercase tracking-widest">{g.partTag}</span>
          <h2 className="font-display text-3xl text-ink mt-2 mb-3">{g.partTitle}</h2>
          <p className="text-charcoal/70 max-w-2xl mb-10 leading-relaxed">{g.partBody}</p>
          <div className="grid sm:grid-cols-3 gap-8">
            <VolCard title={g.part1t} body={g.part1b} />
            <VolCard title={g.part2t} body={g.part2b} />
            <VolCard title={g.part3t} body={g.part3b} />
          </div>
          <div className="mt-10">
            <PrimaryButton href="/contact">{g.partCta}</PrimaryButton>
          </div>
        </div>
      </section>
    </main>
  );
}

function VolCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-t-2 border-ink pt-5">
      <h3 className="font-display text-lg text-ink mb-2">{title}</h3>
      <p className="text-sm text-charcoal/65 leading-relaxed">{body}</p>
    </div>
  );
}
