"use client";

import { useState } from "react";

import { useSession } from "next-auth/react";

import { Button } from "@referrer/ui";

import { siteConfig } from "@/config";

function PricingButton({
  planId,
  className,
  quantity,
  stars,
}: {
  planId: string;
  className?: string;
  quantity?: number;
  stars: number;
}) {
  const { data: session, update } = useSession();

  const [state, setState] = useState(false);

  const buyPlan = async (planId: string, stars: number, quantity?: number) => {
    setState(true);

    await fetch(`${siteConfig.url}/api/stripe`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      credentials: "same-origin",
      body: JSON.stringify({ planId, quantity, stars }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          update({
            ...session,
            user: { ...session?.user, stars: session.user.stars + response.stars },
          });
          window.location.href = response.url;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // const stripeUrl = await checkout({ planId: priceId, quantity: quantity, stars: stars });
    // router.push(data);
    // window.location.replace(data);
  };

  return (
    <Button
      onClick={() => buyPlan(planId, stars, quantity)}
      isLoading={state}
      className={`text-background w-full rounded-lg px-3 py-3 text-sm font-semibold duration-150 ${className}`}>
      Get Started
    </Button>
  );
}

export default PricingButton;
