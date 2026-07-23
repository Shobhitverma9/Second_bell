import Razorpay from "razorpay";

/**
 * Server-side Razorpay client.
 *
 * Requires these environment variables (see .env.local.example):
 *   RAZORPAY_KEY_ID
 *   RAZORPAY_KEY_SECRET
 *
 * Get test keys from the Razorpay Dashboard → Settings → API Keys
 * (https://dashboard.razorpay.com/app/keys). Never expose the key secret
 * to the browser — only RAZORPAY_KEY_ID (via NEXT_PUBLIC_RAZORPAY_KEY_ID)
 * is safe on the client.
 */
export function getRazorpayClient() {
  const key_id = process.env.RAZORPAY_KEY_ID;
  const key_secret = process.env.RAZORPAY_KEY_SECRET;

  if (!key_id || !key_secret) {
    return null;
  }

  return new Razorpay({ key_id, key_secret });
}
