"use server";

import { stripe } from "@/lib/stripe";

export async function getPlans() {
  const stripeResponse = await stripe.prices.list();
  const plans = stripeResponse.data;
  return plans;
}
