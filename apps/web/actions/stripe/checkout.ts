"use server";

import { stripe } from "@/lib/stripe";

import { getSession } from "../sessions";

export async function checkout({
  planId,
  quantity = 1,
  stars,
}: {
  planId: string;
  quantity?: number;
  stars: number;
}) {
  const session = await getSession();
  const checkoutSession = await stripe.checkout.sessions.create({
    // ! locale  https://stripe.com/docs/api/checkout/sessions/create#create_checkout_session-locale
    // ! currency
    mode: "payment",
    payment_method_types: ["card"],
    customer: session.stripeCustomerId,
    line_items: [
      {
        price: planId,
        quantity,
      },
    ],
    metadata: {
      userId: session.id,
      stars,
    },
    success_url: "http://localhost:3000/pricing",
    cancel_url: "http://localhost:3000/pricing",
  });

  return checkoutSession.url;
}
