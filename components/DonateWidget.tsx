"use client";

import { useState } from "react";
import Script from "next/script";
import { useLanguage } from "@/lib/i18n";

declare global {
  interface Window {
    Razorpay: any;
  }
}

type Status = "idle" | "loading" | "success" | "error";

export default function DonateWidget() {
  const { t } = useLanguage();
  const tiers = [1500, 9000, 25000];
  const tierLabels = [t.donate.tier1, t.donate.tier2, t.donate.tier3];

  const [selected, setSelected] = useState<number | null>(tiers[0]);
  const [custom, setCustom] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);

  const amount = custom ? Number(custom) : selected;

  function pickTier(v: number) {
    setSelected(v);
    setCustom("");
  }

  async function handlePay() {
    setMessage(null);

    if (!amount || amount <= 0) {
      setMessage(t.donate.selectAmount);
      return;
    }
    if (!name || !email || !phone) {
      setMessage(t.donate.fillDetails);
      return;
    }
    if (!scriptReady || typeof window === "undefined" || !window.Razorpay) {
      setMessage(t.donate.paying);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, name, email, phone }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || t.donate.configMissing);
        return;
      }

      const rzp = new window.Razorpay({
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        order_id: data.orderId,
        name: "Second Bell",
        description: "Donation",
        prefill: { name, email, contact: phone },
        theme: { color: "#F2A93B" },
        handler: async function (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) {
          try {
            const verifyRes = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });
            const verifyData = await verifyRes.json();
            if (verifyRes.ok && verifyData.verified) {
              setStatus("success");
            } else {
              setStatus("error");
              setMessage(t.donate.failBody);
            }
          } catch {
            setStatus("error");
            setMessage(t.donate.failBody);
          }
        },
        modal: {
          ondismiss: function () {
            setStatus("idle");
          },
        },
      });

      rzp.on("payment.failed", function () {
        setStatus("error");
        setMessage(t.donate.failBody);
      });

      rzp.open();
      setStatus("idle");
    } catch {
      setStatus("error");
      setMessage(t.donate.configMissing);
    }
  }

  return (
    <div className="rounded-sm border border-ink/10 bg-white p-6 sm:p-8">
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        onReady={() => setScriptReady(true)}
        onLoad={() => setScriptReady(true)}
      />

      {status === "success" ? (
        <div className="py-6 text-center">
          <div className="text-3xl mb-3">🎉</div>
          <h3 className="font-display text-2xl text-ink mb-2">{t.donate.successTitle}</h3>
          <p className="text-sm text-charcoal/65 max-w-sm mx-auto">{t.donate.successBody}</p>
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-3 gap-3">
            {tiers.map((v, i) => (
              <button
                key={v}
                type="button"
                onClick={() => pickTier(v)}
                className={`text-left rounded-sm border p-4 transition-colors focus-ring ${
                  selected === v && !custom
                    ? "border-marigold bg-marigold/10"
                    : "border-ink/10 hover:border-ink/25"
                }`}
              >
                <div className="font-display text-2xl text-ink">₹{v.toLocaleString("en-IN")}</div>
                <div className="mt-1 text-xs text-charcoal/60">{tierLabels[i]}</div>
              </button>
            ))}
          </div>

          <div className="mt-5">
            <label className="block text-xs uppercase tracking-widest text-charcoal/50 mb-2">
              {t.donate.customLabel}
            </label>
            <input
              type="number"
              min={1}
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              placeholder={t.donate.customPlaceholder}
              className="w-full sm:w-60 rounded-sm border border-ink/15 bg-white px-4 py-3 text-sm text-charcoal focus-ring placeholder:text-charcoal/30"
            />
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-widest text-charcoal/50 mb-2">{t.donate.nameLabel}</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-sm border border-ink/15 bg-white px-4 py-3 text-sm text-charcoal focus-ring"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-charcoal/50 mb-2">{t.donate.emailLabel}</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-sm border border-ink/15 bg-white px-4 py-3 text-sm text-charcoal focus-ring"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-charcoal/50 mb-2">{t.donate.phoneLabel}</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-sm border border-ink/15 bg-white px-4 py-3 text-sm text-charcoal focus-ring"
              />
            </div>
          </div>

          {message && (
            <p className="mt-4 text-sm text-clay">{message}</p>
          )}

          <button
            onClick={handlePay}
            disabled={status === "loading"}
            className="mt-6 inline-flex items-center justify-center rounded-sm bg-marigold px-6 py-3 text-sm font-semibold text-ink hover:bg-marigold-dark transition-colors focus-ring disabled:opacity-60"
          >
            {status === "loading" ? t.donate.paying : `${t.donate.payButton}${amount ? ` — ₹${amount.toLocaleString("en-IN")}` : ""}`}
          </button>

          {status === "error" && !message && (
            <p className="mt-4 text-sm text-clay">{t.donate.failBody}</p>
          )}
        </>
      )}
    </div>
  );
}
