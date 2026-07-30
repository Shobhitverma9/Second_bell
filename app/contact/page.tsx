"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  const faqs = [
    { q: c.q1, a: c.a1 },
    { q: c.q2, a: c.a2 },
    { q: c.q3, a: c.a3 },
    { q: c.q4, a: c.a4 },
  ];

  return (
    <main>
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-24">
          <span className="font-mono text-xs uppercase tracking-widest text-teal-light">{c.kicker}</span>
          <h1 className="font-display text-4xl sm:text-5xl max-w-2xl leading-tight mt-3">{c.title}</h1>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 grid md:grid-cols-[1fr_1.2fr] gap-14">
          <div>
            <h2 className="font-display text-2xl text-ink mb-6">{c.reachDirect}</h2>
            <ul className="space-y-6 text-sm text-charcoal/75">
              <li>
                <div className="text-charcoal/45 uppercase text-xs tracking-widest mb-1">{c.email}</div>
                {c.emailLabel}
              </li>
              <li>
                <div className="text-charcoal/45 uppercase text-xs tracking-widest mb-1">{c.phone}</div>
                {c.phoneLabel}
              </li>
              <li>
                <div className="text-charcoal/45 uppercase text-xs tracking-widest mb-1">Website</div>
                {c.webLabel}
              </li>
              <li>
                <div className="text-charcoal/45 uppercase text-xs tracking-widest mb-1">{c.office}</div>
                {c.officeAddr}
              </li>
              <li className="pt-4 border-t border-ink/10">
                <div className="text-charcoal/45 uppercase text-xs tracking-widest mb-2">{c.forSchools}</div>
                <div className="space-y-2">
                  <p>{c.entity}</p>
                  <p>{c.tax}</p>
                </div>
              </li>
            </ul>
          </div>

          <form className="space-y-5 bg-white p-8 rounded-xl shadow-sm border border-ink/5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label={c.formName} name="name" />
              <Field label={c.formContact} name="contact" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-charcoal/50 mb-2">
                {c.formRole}
              </label>
              <select
                name="role"
                className="w-full rounded-sm border border-ink/15 bg-white px-4 py-3 text-sm text-charcoal focus-ring"
                defaultValue=""
              >
                <option value="" disabled>{c.formRoleSelect}</option>
                <option>{c.roleDonor}</option>
                <option>{c.roleVolunteer}</option>
                <option>{c.roleSchool}</option>
                <option>{c.roleEmployer}</option>
                <option>{c.roleParent}</option>
                <option>{c.roleOther}</option>
              </select>
            </div>
            <Field label={c.formMessage} name="message" textarea placeholder={c.formMessagePlaceholder} />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-sm bg-marigold px-6 py-3 text-sm font-semibold text-ink hover:bg-marigold-dark transition-colors focus-ring w-full"
            >
              {c.send}
            </button>
          </form>
        </div>
      </section>

      <section className="bg-paper-dim border-t border-ink/10">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-20">
          <span className="font-mono text-xs uppercase tracking-widest text-teal">{c.faqKicker.split('.')[0]}</span>
          <h2 className="font-display text-3xl text-ink mt-2 mb-10">{c.faqKicker.split('.')[1]?.trim() || "Frequently Asked Questions"}</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white border border-ink/10 rounded-xl overflow-hidden">
      <button 
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
      >
        <span className="font-display text-lg text-ink font-bold pr-4">{q}</span>
        <span className="text-marigold text-2xl leading-none font-bold">
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-charcoal/80 leading-relaxed text-sm">
          {a}
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  textarea,
  placeholder,
}: {
  label: string;
  name: string;
  textarea?: boolean;
  placeholder?: string;
}) {
  const common =
    "w-full rounded-sm border border-ink/15 bg-white px-4 py-3 text-sm text-charcoal focus-ring placeholder:text-charcoal/30";
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-widest text-charcoal/50 mb-2">
        {label}
      </label>
      {textarea ? (
        <textarea id={name} name={name} rows={5} className={common} placeholder={placeholder} />
      ) : (
        <input id={name} name={name} className={common} />
      )}
    </div>
  );
}
