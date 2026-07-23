"use client";

import Image from "next/image";
import Link from "next/link";
import Register from "@/components/Register";
import { Eyebrow, PrimaryButton, GhostButton, Stat } from "@/components/ui";
import { useLanguage } from "@/lib/i18n";

export default function Home() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <main>
      {/* HERO */}
      <section className="relative bg-ink text-paper overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div>
            <p className="font-body text-sm text-marigold mb-4 tracking-wide">{h.kicker}</p>
            <h1 className="font-display text-[2.6rem] leading-[1.08] sm:text-6xl sm:leading-[1.05] font-medium">
              {h.heroTitle1}
              <span className="italic text-marigold">{h.heroTitleItalic}</span>
              {h.heroTitle2}
            </h1>
            <p className="mt-6 text-lg text-paper/75 max-w-xl leading-relaxed">{h.heroBody}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <PrimaryButton href="/get-involved#donate">{h.ctaFund}</PrimaryButton>
              <GhostButton href="/programs">{h.ctaSee}</GhostButton>
            </div>
          </div>

          <div className="lg:justify-self-end w-full max-w-md">
            <Register />
            <p className="mt-3 text-xs text-paper/45 font-mono">{h.registerCaption}</p>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
          <Eyebrow>{h.problemKicker}</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl max-w-2xl text-ink leading-tight">
            {h.problemTitle}
          </h2>

          <div className="mt-14 grid md:grid-cols-2 gap-8">
            <div className="rounded-sm overflow-hidden border border-ink/10 bg-white">
              <div className="relative h-56">
                <Image
                  src="/images/student_outside.png"
                  alt="A young Indian student standing outside a classroom door"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-ink mb-2">{h.problem1Title}</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">{h.problem1Body}</p>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden border border-ink/10 bg-white">
              <div className="relative h-56">
                <Image
                  src="/images/student_walking.png"
                  alt="A child walking alone near a road with a school bus in the distance"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-ink mb-2">{h.problem2Title}</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">{h.problem2Body}</p>
              </div>
            </div>
          </div>

          <div className="mt-14 border-l-2 border-marigold pl-6 max-w-2xl">
            <p className="font-display italic text-xl sm:text-2xl text-ink leading-snug">{h.problemQuote}</p>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
          <Eyebrow>{h.approachKicker}</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl max-w-2xl">{h.approachTitle}</h2>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            <ProgramCard tag={h.p1tag} title={h.p1title} description={h.p1body} href="/programs#back-to-class" more={h.learnMore} />
            <ProgramCard tag={h.p2tag} title={h.p2title} description={h.p2body} href="/programs#steady-income" more={h.learnMore} />
            <ProgramCard tag={h.p3tag} title={h.p3title} description={h.p3body} href="/programs#full-plate" more={h.learnMore} />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
          <Eyebrow>{h.processKicker}</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl max-w-2xl text-ink">{h.processTitle}</h2>

          <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: "01", title: h.step1title, body: h.step1body },
              { n: "02", title: h.step2title, body: h.step2body },
              { n: "03", title: h.step3title, body: h.step3body },
              { n: "04", title: h.step4title, body: h.step4body },
            ].map((s) => (
              <li key={s.n} className="border-t-2 border-ink pt-5">
                <span className="font-mono text-sm text-teal">{s.n}</span>
                <h3 className="font-display text-lg text-ink mt-2 mb-2">{s.title}</h3>
                <p className="text-sm text-charcoal/65 leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-paper-dim border-y border-ink/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <Stat value="1,240+" label={h.stat1} />
          <Stat value="₹1.1 Cr" label={h.stat2} />
          <Stat value="410" label={h.stat3} />
          <Stat value="1%" label={h.stat4} />
        </div>
      </section>

      {/* VOICES */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
          <Eyebrow>{h.voicesKicker}</Eyebrow>
          <div className="mt-10 grid md:grid-cols-2 gap-10">
            <Quote text={h.voice1} name={h.voiceIllustrative} role={h.voice1role} />
            <Quote text={h.voice2} name={h.voiceIllustrative} role={h.voice2role} />
          </div>
          <p className="mt-6 text-xs text-paper/40 font-mono">{h.voiceNote}</p>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-marigold">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <h2 className="font-display text-3xl sm:text-4xl text-ink max-w-xl">{h.ctaBandTitle}</h2>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              href="/get-involved#donate"
              className="inline-flex items-center justify-center rounded-sm bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-ink-light transition-colors focus-ring"
            >
              {h.ctaBandDonate}
            </Link>
            <Link
              href="/get-involved#partner"
              className="inline-flex items-center justify-center rounded-sm border border-ink/30 px-6 py-3 text-sm font-semibold text-ink hover:border-ink transition-colors focus-ring"
            >
              {h.ctaBandPartner}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProgramCard({
  tag,
  title,
  description,
  href,
  more,
}: {
  tag: string;
  title: string;
  description: string;
  href: string;
  more: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-sm border border-white/10 bg-white/5 p-7 hover:bg-white/10 transition-colors focus-ring"
    >
      <span className="font-mono text-xs text-marigold uppercase tracking-widest">{tag}</span>
      <h3 className="font-display text-2xl mt-3 mb-3">{title}</h3>
      <p className="text-sm text-paper/70 leading-relaxed">{description}</p>
      <span className="mt-5 inline-block text-sm text-marigold group-hover:translate-x-1 transition-transform">
        {more}
      </span>
    </Link>
  );
}

function Quote({ text, name, role }: { text: string; name: string; role: string }) {
  return (
    <div className="border-l-2 border-marigold pl-6">
      <p className="font-display italic text-xl leading-snug">{text}</p>
      <div className="mt-4 text-sm text-paper/60">
        <span className="text-paper/85">{name}</span> · {role}
      </div>
    </div>
  );
}
