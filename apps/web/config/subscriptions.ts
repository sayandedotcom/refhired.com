import { SubscriptionPlan } from "@/types";

export const freePlan: SubscriptionPlan = {
  name: "Free",
  description: "The free plan is limited to 3 posts. Upgrade to the PRO plan for unlimited posts.",
  stripePriceId: "",
};

export const quaterPlan: SubscriptionPlan = {
  name: "PRO",
  description: "The PRO plan has unlimited posts.",
  stripePriceId: "",
};

export const semiPlan: SubscriptionPlan = {
  name: "Free",
  description: "The free plan is limited to 3 posts. Upgrade to the PRO plan for unlimited posts.",
  stripePriceId: "",
};

export const finalPlan: SubscriptionPlan = {
  name: "PRO",
  description: "The PRO plan has unlimited posts.",
  stripePriceId: "",
};

// stripePriceId: process.env.STRIPE_PRO_MONTHLY_PLAN_ID || "",
