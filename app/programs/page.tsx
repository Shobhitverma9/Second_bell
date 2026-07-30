"use client";

import Image from "next/image";
import { Eyebrow, PrimaryButton } from "@/components/ui";
import { useLanguage } from "@/lib/i18n";

export default function Programs() {
  const { t } = useLanguage();
  const p = t.programs;

  return (
    <main>
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-24">
          <Eyebrow>{p.kicker}</Eyebrow>
          <h1 className="font-display text-4xl sm:text-5xl max-w-2xl leading-tight mt-2">{p.title}</h1>
        </div>
      </section>

      <ProgramSection
        id="pillar-1"
        tag={p.b2c.tag}
        title={p.b2c.title}
        image="/images/classroom_children.png"
        imageAlt="Children sitting in a classroom"
        intro={p.b2c.intro}
        points={[...p.b2c.pts]}
      />

      <ProgramSection
        id="pillar-2"
        tag={p.si.tag}
        title={p.si.title}
        image="/images/family_home.png"
        imageAlt="A parent working at a small business"
        intro={p.si.intro}
        reverse
        points={[...p.si.pts]}
      />

      <ProgramSection
        id="pillar-3"
        tag={p.fp.tag}
        title={p.fp.title}
        image="/images/community_gathering.png"
        imageAlt="Community support"
        intro={p.fp.intro}
        points={[...p.fp.pts]}
      />

      <section className="bg-marigold">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <h2 className="font-display text-2xl sm:text-3xl text-ink max-w-lg">{p.ctaTitle}</h2>
          <PrimaryButton href="/contact">{p.ctaButton}</PrimaryButton>
        </div>
      </section>
    </main>
  );
}

function ProgramSection({
  id,
  tag,
  title,
  image,
  imageAlt,
  intro,
  points,
  reverse,
}: {
  id: string;
  tag: string;
  title: string;
  image: string;
  imageAlt: string;
  intro: string;
  points: string[];
  reverse?: boolean;
}) {
  return (
    <section id={id} className="bg-paper border-t border-ink/10 scroll-mt-16">
      <div
        className={`mx-auto max-w-5xl px-5 sm:px-8 py-16 sm:py-20 grid md:grid-cols-2 gap-12 items-center ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="relative h-72 rounded-xl overflow-hidden border border-ink/10 shadow-xl">
          <Image src={image} alt={imageAlt} fill className="object-cover" />
        </div>
        <div>
          <span className="font-mono text-xs text-teal uppercase tracking-widest">{tag}</span>
          <h2 className="font-display text-3xl text-ink mt-2 mb-3">{title}</h2>
          <p className="text-charcoal/75 mb-6 leading-relaxed">{intro}</p>
          {points.length > 0 && (
            <ul className="space-y-3">
              {points.map((pt) => (
                <li key={pt} className="flex gap-3 text-sm text-charcoal/75 leading-relaxed">
                  <span className="text-marigold-dark mt-0.5">—</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
