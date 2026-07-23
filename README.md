# Second Bell

A Next.js (App Router) site for an NGO that clears pending school fees for
children forced into dropouts, and supports their parents into steady,
dignified livelihoods.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Donations (Razorpay)

The donate flow on `/get-involved#donate` is fully wired to Razorpay,
you just need to add your keys:

1. Copy `.env.local.example` to `.env.local`.
2. Get your Key ID and Key Secret from
   [dashboard.razorpay.com/app/keys](https://dashboard.razorpay.com/app/keys)
   (start in **Test Mode**).
3. Fill in `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` in `.env.local`.
4. Restart the dev server. Test payments with Razorpay's
   [test cards](https://razorpay.com/docs/payments/payments/test-card-upi-details/).

How it works:
- `components/DonateWidget.tsx` — the donation UI (tiers, custom amount,
  donor details), loads `checkout.js` and opens the Razorpay modal.
- `app/api/razorpay/create-order/route.ts` — creates a Razorpay order
  server-side (amount validated server-side, never trust the client).
- `app/api/razorpay/verify/route.ts` — verifies the payment signature
  after checkout, so a payment is only trusted once it's cryptographically
  confirmed. Has `TODO`s marking where to save the donation to a database
  and send a receipt email once you're ready to go live.
- When keys aren't set, the widget fails gracefully with a message asking
  to configure payments, instead of crashing.

Before going live: switch to Live Mode keys, add webhook handling for
edge cases (payment confirmed after the user closes the tab), and hook
up the `TODO`s in `verify/route.ts` to your database/email provider.

## Hindi / English toggle

`lib/i18n.tsx` holds a `LanguageProvider` (wraps the whole app in
`app/layout.tsx`) plus a `translations` dictionary with `en` and `hi`
copies of every string on the site. The toggle lives in the navbar
(`EN` / हि) and the choice is remembered in `localStorage`.

To edit copy: change the matching key in `translations.en` and
`translations.hi` inside `lib/i18n.tsx` — every page reads from there via
`useLanguage()`, so there's no need to touch the page files for copy
changes. To add a third language, add a new key to `Lang` and a new
block in `translations`.

## Before you launch

- Swap the `picsum.photos` placeholder images for real, consented photographs
  of your own beneficiaries and partner schools (or licensed stock) — using
  stock photos of unrelated children on a fundraising site raises real
  consent and trust concerns.
- Replace the illustrative testimonials, stats, registration number, and
  contact details in `lib/i18n.tsx` and `components/Footer.tsx` with your
  real ones (both English and Hindi versions).
- Wire the contact form in `app/contact/page.tsx` to an actual backend or
  form service (e.g. Formspree, a serverless function, or your CRM).
- Set up Razorpay as described above, and add analytics where you'd like it.
