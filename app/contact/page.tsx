"use client";

import { useLanguage } from "@/lib/i18n";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

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
            <ul className="space-y-5 text-sm text-charcoal/75">
              <li>
                <div className="text-charcoal/45 uppercase text-xs tracking-widest mb-1">{c.email}</div>
                hello@secondbell.org
              </li>
              <li>
                <div className="text-charcoal/45 uppercase text-xs tracking-widest mb-1">{c.phone}</div>
                +91 98XXX XXXXX
              </li>
              <li>
                <div className="text-charcoal/45 uppercase text-xs tracking-widest mb-1">{c.office}</div>
                {c.officeAddr}
              </li>
              <li>
                <div className="text-charcoal/45 uppercase text-xs tracking-widest mb-1">{c.forSchools}</div>
                schools@secondbell.org
              </li>
            </ul>
          </div>

          <form className="space-y-5">
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
              className="inline-flex items-center justify-center rounded-sm bg-marigold px-6 py-3 text-sm font-semibold text-ink hover:bg-marigold-dark transition-colors focus-ring"
            >
              {c.send}
            </button>
          </form>
        </div>
      </section>
    </main>
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
