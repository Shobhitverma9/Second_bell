"use client";

import Image from "next/image";
import { Eyebrow, PrimaryButton, Stat } from "@/components/ui";
import { useLanguage } from "@/lib/i18n";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <main>
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-28">
          <Eyebrow>{a.kicker}</Eyebrow>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight max-w-3xl mt-2">{a.title}</h1>
          <div className="mt-8 text-lg text-paper/80 max-w-3xl leading-relaxed whitespace-pre-wrap">
            {a.intro}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <Eyebrow>{a.beliefKicker}</Eyebrow>
            <h2 className="font-display text-3xl text-ink leading-snug mt-2">{a.beliefTitle}</h2>
            <p className="mt-5 text-charcoal/75 leading-relaxed text-lg">{a.beliefBody}</p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl border border-ink/5">
            <Image
              src="/images/family_home.png"
              alt="A parent and child"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-paper-dim border-y border-ink/10">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 text-center">
          <Eyebrow>{a.founderKicker}</Eyebrow>
          <div className="mt-10 mx-auto max-w-4xl text-2xl sm:text-3xl text-ink font-display leading-relaxed italic border-l-4 border-marigold pl-8 text-left">
            {a.founderBody.split('—')[0]}
            <p className="text-lg font-body font-bold text-ink/70 mt-6 not-italic">
              — {a.founderBody.split('—')[1]}
            </p>
          </div>
        </div>
      </section>
      
      <section className="bg-marigold">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 text-center flex flex-col items-center">
          <h2 className="font-display text-3xl text-ink font-bold">{a.cta}</h2>
          <PrimaryButton href="/get-involved" className="mt-8">
            {a.cta}
          </PrimaryButton>
        </div>
      </section>
    </main>
  );
}
