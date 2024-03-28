"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { Button } from "@referrer/ui";

function PricingButton({
  priceId,
  className,
  quantity,
  stars,
}: {
  priceId: string;
  className?: string;
  quantity?: number;
  stars: number;
}) {
  const router = useRouter();
  const [state, setState] = useState(false);
  const buyPlan = async (priceId: string, stars: number, quantity?: number) => {
    setState(true);
    // const stripeUrl = await checkout({ planId: priceId, quantity: quantity, stars: stars });
    // router.push(stripeUrl);
    // window.location.replace(stripeUrl);
  };

  return (
    <Button
      onClick={() => buyPlan(priceId, stars, quantity)}
      isLoading={state}
      className={`text-background w-full rounded-lg px-3 py-3 text-sm font-semibold duration-150 ${className}`}>
      Get Started
    </Button>
  );
}

export default PricingButton;
