"use client";

import Image from "next/image";
import Link from "next/link";
import Register from "@/components/Register";
import { PrimaryButton, GhostButton, Stat } from "@/components/ui";
import { useLanguage } from "@/lib/i18n";

/* ──────────────────────────────────────────────────────────────
   MARQUEE TICKER
────────────────────────────────────────────────────────────── */
const TICKER_ITEMS = [
  "Help a child go back to school",
  "Sponsor a pending fee today",
  "Every rupee clears a seat",
  "No child should miss class over money",
  "1,240+ children back in class",
  "Loans at 1% yearly interest",
  "Build steady income for families",
];

function MarqueeTicker() {
  const repeated = [...TICKER_ITEMS, ...TICKER_ITEMS]; // doubled for seamless loop
  return (
    <div
      className="bg-marigold overflow-hidden py-2.5"
      aria-label="Announcement ticker"
    >
      <div className="marquee-track select-none">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-6 text-ink font-semibold text-sm whitespace-nowrap"
          >
            {item}
            <span className="opacity-40 font-bold" aria-hidden>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   PAGE
────────────────────────────────────────────────────────────── */
export default function Home() {
  const { t } = useLanguage();
  const h = t.home;
  const g = t.getInvolved;

  return (
    <main>
      {/* MARQUEE */}
      <MarqueeTicker />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-ink text-paper overflow-hidden min-h-[88vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/student_outside.png"
            alt="A child standing outside a school"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/75 to-ink/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl w-full px-5 sm:px-8 py-20 sm:py-32 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          {/* Left text */}
          <div>
            <p className="font-body text-xs text-marigold font-bold uppercase mb-5 tracking-[0.2em]">
              {h.kicker}
            </p>
            <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl leading-[1.05] font-extrabold tracking-tight text-white">
              {h.heroTitle1}
              <span className="italic text-marigold"> {h.heroTitleItalic}</span>
              {h.heroTitle2}
            </h1>
            <p className="mt-7 text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed font-light">
              {h.heroBody}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <PrimaryButton
                href="/get-involved#donate"
                className="!px-8 !py-4 !text-base !font-bold shadow-lg shadow-marigold/30 hover:-translate-y-1 transition-all"
              >
                {h.ctaFund}
              </PrimaryButton>
              <GhostButton
                href="/programs"
                className="!px-8 !py-4 !text-base bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20"
              >
                {h.ctaSee}
              </GhostButton>
            </div>
          </div>

          {/* Right — featured card (Goonj-style rounded card) */}
          <div className="lg:justify-self-end w-full max-w-sm">
            <div className="rounded-2xl border-4 border-marigold/60 overflow-hidden shadow-2xl bg-white/5 backdrop-blur-md">
              <div className="relative h-52">
                <Image
                  src="/images/classroom_children.png"
                  alt="Children back in classroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 bg-ink/80 backdrop-blur-sm">
                <p className="text-xs font-bold text-marigold uppercase tracking-widest mb-1">
                  Join Us for
                </p>
                <p className="font-display text-2xl font-extrabold text-white">
                  Second Bell <span className="text-marigold">2026</span>
                </p>
                <p className="text-sm text-white/70 mt-1">
                  Helping every child walk back into class
                </p>
                <Link
                  href="/get-involved#donate"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-marigold px-5 py-2 text-sm font-bold text-ink hover:bg-marigold-dark transition-colors"
                >
                  Contribute Now →
                </Link>
              </div>
            </div>
            <p className="mt-3 text-xs text-white/40 font-mono text-center">
              {h.registerCaption}
            </p>
          </div>
        </div>
      </section>


      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24">
          <p className="text-xs font-bold text-marigold uppercase tracking-[0.2em] mb-3">
            {h.processKicker}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink max-w-2xl">
            {h.processTitle}
          </h2>

          <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: "01", title: h.step1title, body: h.step1body },
              { n: "02", title: h.step2title, body: h.step2body },
              { n: "03", title: h.step3title, body: h.step3body },
              { n: "04", title: h.step4title, body: h.step4body },
            ].map((s) => (
              <li key={s.n} className="group">
                <div className="h-1 w-full bg-ink/10 rounded-full mb-5 overflow-hidden">
                  <div className="h-full bg-marigold rounded-full w-0 group-hover:w-full transition-all duration-700" />
                </div>
                <span className="font-mono text-3xl font-bold text-ink/10">
                  {s.n}
                </span>
                <h3 className="font-display text-lg font-bold text-ink mt-2 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-charcoal/65 leading-relaxed">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── IMPACT STATS ─────────────────────────────────────── */}
      <section className="bg-ink text-white py-20 sm:py-28 relative overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-marigold/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-teal/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-center text-xs font-bold text-marigold uppercase tracking-[0.2em] mb-12">
            Our Impact
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16">
            {[
              { value: "1,240+", label: h.stat1, color: "text-marigold" },
              { value: "₹1.1 Cr", label: h.stat2, color: "text-teal-light" },
              { value: "410", label: h.stat3, color: "text-marigold" },
              { value: "1%", label: h.stat4, color: "text-teal-light" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className={`font-display text-5xl sm:text-6xl font-extrabold ${s.color}`}>
                  {s.value}
                </p>
                <p className="mt-3 text-sm text-white/60 leading-snug max-w-[160px] mx-auto">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GET INVOLVED / CONTRIBUTE ────────────────────────── */}
      <section className="bg-paper border-t border-ink/5">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-marigold uppercase tracking-[0.2em] mb-3">
              We need your help
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink max-w-2xl mx-auto">
              Contribute for the cause
            </h2>
          </div>

          <div className="space-y-20">
            {/* Subsection 1 */}
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <div className="max-w-3xl mb-10">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4">
                    {g.c1Focus.replace("Focus: ", "")}
                  </h3>
                  <p className="text-charcoal/80 leading-relaxed text-lg">
                    {g.c1Body}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <HomeCampaignCard subTitle="Monthly Sponsorship" price="₹900" priceSuffix="/ month" desc="Sponsors a child’s complete monthly tuition and examination fees." />
                  <HomeCampaignCard subTitle="Yearly Sponsorship" price="₹10,800" priceSuffix="/ year" desc="Guarantees one full, uninterrupted academic year of education and dignity." isDark={true} />
                </div>
              </div>
              <div className="lg:col-span-1 relative h-full min-h-[300px] lg:min-h-[400px] rounded-2xl overflow-hidden hidden lg:block">
                <Image src="/images/education_continuity.jpg" alt="Education Continuity" fill className="object-cover" />
              </div>
            </div>

            {/* Subsection 2 */}
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <div className="max-w-3xl mb-10">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4">
                    {g.c2Focus.replace("Focus: ", "")}
                  </h3>
                  <p className="text-charcoal/80 leading-relaxed text-lg">
                    {g.c2Body}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <HomeCampaignCard subTitle="Uniform & Shoes" price="₹800" desc="2 sets of tailored school uniforms and sturdy leather school shoes." />
                  <HomeCampaignCard subTitle="Annual Study Kit" price="₹500" desc="A durable backpack, 10 notebooks, geometry set, and complete writing stationery." />
                  <HomeCampaignCard subTitle="Complete Confidence" price="₹1,300" desc="Full Uniform + Shoes + Complete Backpack Kit." isDark={true} />
                </div>
              </div>
              <div className="lg:col-span-1 relative h-full min-h-[300px] lg:min-h-[400px] rounded-2xl overflow-hidden hidden lg:block">
                <Image src="/images/school_kit.jpg" alt="School Kit" fill className="object-cover" />
              </div>
            </div>

            {/* Subsection 3 */}
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <div className="max-w-3xl mb-10">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4">
                    {g.c3Focus.replace("Focus: ", "")}
                  </h3>
                  <p className="text-charcoal/80 leading-relaxed text-lg">
                    {g.c3Body}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <HomeCampaignCard subTitle="Total Transformation" price="₹12,000" priceSuffix="/ year" desc="Fully supports 1 student with education, kit, and uniform for an entire academic year." isDark={true} />
                </div>
              </div>
              <div className="lg:col-span-1 relative h-full min-h-[300px] lg:min-h-[400px] rounded-2xl overflow-hidden hidden lg:block">
                <Image src="/images/full_sponsorship.jpg" alt="Total Transformation" fill className="object-cover" />
              </div>
            </div>

            {/* Subsection 4 */}
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <div className="max-w-3xl mb-10">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4">
                    {g.c4Focus.replace("Focus: ", "")}
                  </h3>
                  <p className="text-charcoal/80 leading-relaxed text-lg">
                    {g.c4Body}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <HomeCampaignCard subTitle="Micro-Enterprise" price="₹5,000" desc="Seeds a micro-enterprise capital loan for a parent in need." />
                  <HomeCampaignCard subTitle="Family Stability" price="₹15,000" desc="Restores a family's financial stability while sponsoring their child's academic year simultaneously." isDark={true} />
                </div>
              </div>
              <div className="lg:col-span-1 relative h-full min-h-[300px] lg:min-h-[400px] rounded-2xl overflow-hidden hidden lg:block">
                <Image src="/images/micro_enterprise.jpg" alt="Family Stability" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAMPAIGN GALLERY ────────────────────────── */}
      <section className="bg-ink text-white py-20 sm:py-28 relative">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-marigold uppercase tracking-[0.2em] mb-3">
              Recent Campaign
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
              Paalanhaar – Food for Girl Education
            </h2>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              A glimpse into our recent initiative supporting the education and nourishment of young girls.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "/images/paalanhaar/img_1_1787033741374.jpg",
              "/images/paalanhaar/img_2_1787034243692.jpg",
              "/images/paalanhaar/img_3_1787034569079.jpg",
              "/images/paalanhaar/img_7_1787036456296.jpg",
              "/images/paalanhaar/ChatGPT Image Aug 18, 2026, 01_30_01 PM.png",
              "/images/paalanhaar/ChatGPT Image Aug 18, 2026, 01_32_38 PM.png",
            ].map((src, i) => (
              <div key={i} className="relative aspect-video sm:aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 group cursor-pointer shadow-2xl bg-white/5">
                <Image
                  src={src}
                  alt={`Paalanhaar Campaign Image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WIDE STORY CARD (Goonj Latest Updates style) ────── */}
      <section className="bg-paper-dim">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24">
          <p className="text-xs font-bold text-marigold uppercase tracking-[0.2em] mb-3">
            {h.voicesKicker}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-10">
            Stories from the Field
          </h2>

          {/* Wide image story card */}
          <div className="card-lift relative rounded-2xl overflow-hidden h-[420px] sm:h-[500px] cursor-pointer">
            <Image
              src="/images/community_gathering.png"
              alt="Community story"
              fill
              className="object-cover"
            />
            <div className="img-card-overlay absolute inset-0" />
            <div className="absolute bottom-0 left-0 p-8 sm:p-12 max-w-2xl">
              <p className="text-xs font-bold text-marigold uppercase tracking-widest mb-2">
                Our Journey
              </p>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-white leading-snug">
                "Most of these families aren't careless — they're carrying a job
                loss, an illness, or a home with only one earning parent."
              </h3>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/30 px-5 py-2 text-sm font-semibold text-white hover:bg-white/25 transition-colors"
              >
                Read our story →
              </Link>
            </div>
          </div>

          {/* Two quote cards below */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Quote text={h.voice1} name={h.voiceIllustrative} role={h.voice1role} />
            <Quote text={h.voice2} name={h.voiceIllustrative} role={h.voice2role} />
          </div>
          <p className="mt-4 text-xs text-charcoal/40 font-mono">
            {h.voiceNote}
          </p>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────── */}
      <section className="bg-marigold">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <p className="text-xs font-bold text-ink/60 uppercase tracking-[0.2em] mb-3">
              Make a difference
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink max-w-xl">
              {h.ctaBandTitle}
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              href="/get-involved#donate"
              className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-3.5 text-sm font-bold text-paper hover:bg-ink-light transition-colors focus-ring shadow-xl shadow-ink/20"
            >
              {h.ctaBandDonate}
            </Link>
            <Link
              href="/get-involved#partner"
              className="inline-flex items-center justify-center rounded-full border-2 border-ink/30 px-8 py-3.5 text-sm font-bold text-ink hover:border-ink transition-colors focus-ring"
            >
              {h.ctaBandPartner}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ──────────────────────────────────────────────────────────────
   SUB-COMPONENTS
────────────────────────────────────────────────────────────── */
function Quote({
  text,
  name,
  role,
}: {
  text: string;
  name: string;
  role: string;
}) {
  return (
    <div className="rounded-xl bg-white border border-ink/5 shadow-sm p-7 flex flex-col gap-4">
      <svg
        className="w-8 h-8 text-marigold/30"
        fill="currentColor"
        viewBox="0 0 32 32"
        aria-hidden
      >
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
      <p className="font-display italic text-lg sm:text-xl text-ink leading-snug flex-1">
        {text}
      </p>
      <div className="text-sm font-medium text-charcoal/70 border-t border-ink/5 pt-4">
        <span className="text-ink font-bold">{name}</span>
        <span className="mx-2 opacity-40">|</span>
        {role}
      </div>
    </div>
  );
}

function HomeCampaignCard({ 
  subTitle, 
  price, 
  priceSuffix, 
  desc, 
  isDark = false 
}: { 
  subTitle: string; 
  price: string; 
  priceSuffix?: string; 
  desc: string; 
  isDark?: boolean; 
}) {
  return (
    <div className={`${isDark ? "bg-ink text-white shadow-lg border-ink hover:border-marigold/50" : "bg-white text-ink shadow-sm hover:shadow-md border-ink/5 hover:border-marigold/50"} rounded-2xl p-6 sm:p-8 border-2 transition-colors flex flex-col relative overflow-hidden group`}>
      {isDark && (
        <div className="absolute top-0 right-0 p-4">
          <span className="inline-block bg-marigold text-ink text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">High Impact</span>
        </div>
      )}
      <div className="mb-4">
        <p className="text-xs font-bold text-marigold uppercase tracking-wider mb-2">{subTitle}</p>
        <p className={`font-display text-4xl font-extrabold ${isDark ? "text-white" : "text-ink"}`}>
          {price} {priceSuffix && <span className={`text-lg font-medium ${isDark ? "text-white/50" : "text-ink/50"}`}>{priceSuffix}</span>}
        </p>
      </div>
      <p className={`${isDark ? "text-white/70" : "text-charcoal/70"} mb-8 flex-1 leading-relaxed`}>
        {desc}
      </p>
      <div className="flex items-center gap-3 mt-auto relative z-10">
        <Link
          href="/get-involved#donate"
          className="flex-1 text-center rounded-full bg-marigold px-4 py-3 text-sm font-bold text-ink hover:bg-marigold-dark transition-colors"
        >
          Donate
        </Link>
        <Link
          href="/get-involved"
          className={`flex-1 text-center rounded-full border-2 px-4 py-3 text-sm font-bold transition-colors ${isDark ? "border-white/20 text-white hover:border-white/50" : "border-ink/10 text-ink hover:border-ink/30"}`}
        >
          View More
        </Link>
      </div>
    </div>
  );
}
