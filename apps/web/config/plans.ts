import { SubscriptionPlan } from "@/types";

export const plans: SubscriptionPlan[] = [
  {
    name: "Experienced Plan",
    description:
      "Best Suited for Professionals who have a good experience and most likely to get referred in few applies.",
    price: "700",
    stars: 70,
    isMostPop: false,
    features: [
      "Curabitur faucibus",
      "massa ut pretium maximus",
      "Sed posuere nisi",
      "Pellentesque eu nibh et neque",
      "Suspendisse a leo",
      "Praesent quis venenatis ipsum",
      "Duis non diam vel tortor",
      "Curabitur faucibus",
    ],
    stripePriceId: "price_1NlGx8SHACf4T604kcuUolaJ",
  },
  {
    name: "Junior Plan",
    description:
      "Best Suited for Professionals who have less experience and least likely to get referred in few applies.",
    price: "1200",
    stars: 120,
    isMostPop: true,
    features: [
      "Curabitur faucibus",
      "massa ut pretium maximus",
      "Sed posuere nisi",
      "Pellentesque eu nibh et neque",
      "Suspendisse a leo",
      "Praesent quis venenatis ipsum",
      "Duis non diam vel tortor",
      "Curabitur faucibus",
    ],
    stripePriceId: "price_1NlGzzSHACf4T604kdD9Le3P",
  },
  {
    name: "Layoffed Plan",
    description:
      "Best Suited for Professionals who have suddenly layoffed and immediately searching for jobs.",
    price: "2000",
    stars: 200,
    isMostPop: false,
    features: [
      "Curabitur faucibus",
      "massa ut pretium maximus",
      "Sed posuere nisi",
      "Pellentesque eu nibh et neque",
      "Suspendisse a leo",
      "Praesent quis venenatis ipsum",
      "Duis non diam vel tortor",
      "Curabitur faucibus",
    ],
    stripePriceId: "price_1NlH0dSHACf4T604X77dLSbr",
  },
];

// stripePriceId: process.env.STRIPE_PRO_MONTHLY_PLAN_ID || "",
