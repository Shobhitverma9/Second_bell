import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

/**
 * Verifies the signature Razorpay returns after a successful checkout.
 * This confirms the payment actually happened and wasn't spoofed from
 * the browser — always verify server-side before treating a donation
 * as confirmed (e.g. before sending a receipt or updating your ledger).
 *
 * Docs: https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration/#step-5-verify-payment-signature
 */
export async function POST(req: NextRequest) {
  const key_secret = process.env.RAZORPAY_KEY_SECRET;

  if (!key_secret) {
    return NextResponse.json(
      { error: "Payments are not configured yet on the server." },
      { status: 503 }
    );
  }

  let body: {
    razorpay_order_id?: string;
    razorpay_payment_id?: string;
    razorpay_signature?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return NextResponse.json({ error: "Missing payment details." }, { status: 400 });
  }

  const expectedSignature = crypto
    .createHmac("sha256", key_secret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  const isValid = expectedSignature === razorpay_signature;

  if (!isValid) {
    return NextResponse.json({ verified: false, error: "Signature mismatch." }, { status: 400 });
  }

  // TODO once you're ready to go live:
  //  - persist { razorpay_order_id, razorpay_payment_id, amount, donor } to your database
  //  - send a donation receipt email (required for 80G acknowledgements)
  //  - optionally notify your team (Slack/email) of the new donation

  return NextResponse.json({ verified: true });
}
