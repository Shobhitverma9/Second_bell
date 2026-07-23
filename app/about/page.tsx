"use client";

import Image from "next/image";
import { Eyebrow, PrimaryButton, Stat } from "@/components/ui";
import { useLanguage } from "@/lib/i18n";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  const principles = [
    { title: a.pr1t, body: a.pr1b },
    { title: a.pr2t, body: a.pr2b },
    { title: a.pr3t, body: a.pr3b },
    { title: a.pr4t, body: a.pr4b },
  ];

  return (
    <main>
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-28">
          <Eyebrow>{a.kicker}</Eyebrow>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight max-w-3xl">{a.title}</h1>
          <p className="mt-6 text-lg text-paper/75 max-w-2xl leading-relaxed">{a.intro}</p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 grid md:grid-cols-2 gap-14 items-start">
          <div>
            <Eyebrow>{a.beliefKicker}</Eyebrow>
            <h2 className="font-display text-3xl text-ink leading-snug">{a.beliefTitle}</h2>
            <p className="mt-5 text-charcoal/70 leading-relaxed">{a.beliefBody}</p>
          </div>
          <div className="relative h-72 rounded-sm overflow-hidden border border-ink/10">
            <Image
              src="https://picsum.photos/seed/secondbell-parent/900/700"
              alt="A parent at work"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-paper-dim border-y border-ink/10">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-16 grid sm:grid-cols-3 gap-10">
          <Stat value="2021" label={a.stat1} />
          <Stat value="38" label={a.stat2} />
          <Stat value="0%" label={a.stat3} />
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-24">
          <Eyebrow>{a.howKicker}</Eyebrow>
          <div className="grid sm:grid-cols-2 gap-8 mt-10">
            {principles.map((p) => (
              <div key={p.title} className="border-t-2 border-ink pt-5">
                <h3 className="font-display text-lg text-ink mb-2">{p.title}</h3>
                <p className="text-sm text-charcoal/65 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <PrimaryButton href="/get-involved">{a.cta}</PrimaryButton>
          </div>
        </div>
      </section>
    </main>
  );
}
