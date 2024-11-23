import { SubscriptionPlan } from "@/types";

export const plans: SubscriptionPlan[] = [
  {
    name: "Experienced Plan",
    description:
      "Best Suited for Professionals who have a good experience and most likely to get referred in few applies.",
    price: "700",
    stars: 70,
    isMostPop: false,
    features: ["70 Stars", "Refundable"],
    stripePriceId: process.env.STRIPE_EXPERIENCED_PRICE_ID,
  },
  {
    name: "Junior Plan",
    description:
      "Best Suited for Professionals who have less experience and least likely to get referred in few applies.",
    price: "1200",
    stars: 120,
    isMostPop: true,
    features: ["120 Stars", "Refundable"],
    stripePriceId: process.env.STRIPE_JUNIOR_PRICE_ID,
  },
  {
    name: "Layoffed Plan",
    description:
      "Best Suited for Professionals who have suddenly layoffed and immediately searching for jobs.",
    price: "2000",
    stars: 200,
    isMostPop: false,
    features: ["200 Stars", "Refundable"],
    stripePriceId: process.env.STRIPE_LAYOFFED_PRICE_ID,
  },
];
