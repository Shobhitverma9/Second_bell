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
          <h1 className="font-display text-4xl sm:text-5xl max-w-3xl leading-tight mt-3">{g.title}</h1>
        </div>
      </section>

      {/* Campaigns Section */}
      <section id="campaigns" className="bg-paper-dim border-y border-ink/10 scroll-mt-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20">
          
          <div className="flex flex-col gap-12">
            {/* Campaign 1 */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-ink/5">
              <span className="font-mono text-xs text-marigold-dark uppercase tracking-widest">{g.c1Tag}</span>
              <h3 className="font-display text-3xl text-ink mt-3 mb-4">{g.c1Focus}</h3>
              <p className="text-base text-charcoal/80 mb-8 leading-relaxed max-w-3xl">{g.c1Body}</p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <OptionCard text={g.c1p1} />
                <OptionCard text={g.c1p2} />
              </div>
            </div>
            
            {/* Campaign 2 */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-ink/5">
              <span className="font-mono text-xs text-marigold-dark uppercase tracking-widest">{g.c2Tag}</span>
              <h3 className="font-display text-3xl text-ink mt-3 mb-4">{g.c2Focus}</h3>
              <p className="text-base text-charcoal/80 mb-8 leading-relaxed max-w-3xl">{g.c2Body}</p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <OptionCard text={g.c2p1} />
                <OptionCard text={g.c2p2} />
                <OptionCard text={g.c2p3} />
              </div>
            </div>

            {/* Campaign 3 */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-ink/5">
              <span className="font-mono text-xs text-marigold-dark uppercase tracking-widest">{g.c3Tag}</span>
              <h3 className="font-display text-3xl text-ink mt-3 mb-4">{g.c3Focus}</h3>
              <p className="text-base text-charcoal/80 mb-8 leading-relaxed max-w-3xl">{g.c3Body}</p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <OptionCard text={g.c3p1} />
              </div>
            </div>

            {/* Campaign 4 */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-ink/5">
              <span className="font-mono text-xs text-marigold-dark uppercase tracking-widest">{g.c4Tag}</span>
              <h3 className="font-display text-3xl text-ink mt-3 mb-4">{g.c4Focus}</h3>
              <p className="text-base text-charcoal/80 mb-8 leading-relaxed max-w-3xl">{g.c4Body}</p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <OptionCard text={g.c4p1} />
                <OptionCard text={g.c4p2} />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* DONATE */}
      <section id="donate" className="bg-paper scroll-mt-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20">
          <span className="font-mono text-xs text-teal uppercase tracking-widest">Donate Now</span>
          <h2 className="font-display text-3xl text-ink mt-2 mb-8">Support a Campaign</h2>

          <DonateWidget />
        </div>
      </section>

      {/* PARTNER */}
      <section id="partner" className="bg-marigold scroll-mt-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20">
          <span className="font-mono text-xs text-ink/70 uppercase tracking-widest">{g.partTag}</span>
          <h2 className="font-display text-3xl text-ink mt-2 mb-4">{g.partTitle}</h2>
          <p className="text-ink/80 max-w-2xl mb-10 leading-relaxed whitespace-pre-wrap">{g.partBody}</p>
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mb-10">
            <div className="border-t-2 border-ink pt-5">
              <h3 className="font-display text-lg text-ink mb-1">{g.part1t}</h3>
              <p className="text-sm text-ink/80 font-bold">{g.part1b}</p>
            </div>
            <div className="border-t-2 border-ink pt-5">
              <h3 className="font-display text-lg text-ink mb-1">{g.part2t}</h3>
              <p className="text-sm text-ink/80 font-bold">{g.part2b}</p>
            </div>
          </div>
          <div>
            <PrimaryButton href="/contact" className="bg-ink text-white hover:bg-ink-light">
              {g.partCta}
            </PrimaryButton>
          </div>
        </div>
      </section>
    </main>
  );
}

function OptionCard({ text }: { text: string }) {
  let header = "";
  let sub = "";
  let body = text;

  const match1 = text.match(/[:—]/);
  if (match1 && match1.index !== undefined) {
    header = text.substring(0, match1.index).trim();
    body = text.substring(match1.index + 1).trim();

    const match2 = body.match(/:/);
    if (match2 && match2.index !== undefined) {
      sub = body.substring(0, match2.index).trim();
      body = body.substring(match2.index + 1).trim();
    }
  } else {
    header = text;
    body = "";
  }

  return (
    <div className="flex flex-col p-6 bg-paper rounded-2xl border-2 border-ink/5 hover:border-marigold/50 transition-all shadow-sm hover:shadow-md h-full group">
      <div className="mb-4">
        {sub && <p className="text-xs font-bold text-marigold uppercase tracking-wider mb-2">{sub}</p>}
        <p className="font-display text-3xl font-extrabold text-ink">{header}</p>
      </div>
      <p className="text-sm text-charcoal/70 mb-8 flex-1 leading-relaxed">
        {body}
      </p>
      <a
        href="#donate"
        className="block text-center bg-marigold px-4 py-3 text-sm font-bold text-ink rounded-full hover:bg-marigold-dark transition-colors"
      >
        Donate
      </a>
    </div>
  );
}
