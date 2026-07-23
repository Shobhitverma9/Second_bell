import { NextRequest, NextResponse } from "next/server";
import { getRazorpayClient } from "@/lib/razorpay";

// Keep these in sync with the amounts shown in components/DonateWidget.tsx
const MIN_AMOUNT_INR = 50;
const MAX_AMOUNT_INR = 500000;

export async function POST(req: NextRequest) {
  const razorpay = getRazorpayClient();

  if (!razorpay) {
    return NextResponse.json(
      {
        error:
          "Payments are not configured yet. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET on the server (see .env.local.example).",
      },
      { status: 503 }
    );
  }

  let body: { amount?: number; name?: string; email?: string; phone?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const amount = Number(body.amount);

  if (!Number.isFinite(amount) || amount < MIN_AMOUNT_INR || amount > MAX_AMOUNT_INR) {
    return NextResponse.json(
      { error: `Amount must be between ₹${MIN_AMOUNT_INR} and ₹${MAX_AMOUNT_INR}.` },
      { status: 400 }
    );
  }

  try {
    const order = await razorpay.orders.create({
      // Razorpay expects the amount in the smallest currency unit (paise).
      amount: Math.round(amount * 100),
      currency: "INR",
      receipt: `sb_${Date.now()}`,
      notes: {
        donor_name: body.name ?? "",
        donor_email: body.email ?? "",
        donor_phone: body.phone ?? "",
        source: "second-bell-website",
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID,
    });
  } catch (err) {
    console.error("Razorpay order creation failed:", err);
    return NextResponse.json(
      { error: "Could not start the payment. Please try again in a moment." },
      { status: 502 }
    );
  }
}
