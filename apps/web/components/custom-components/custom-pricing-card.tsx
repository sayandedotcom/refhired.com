"use client";

import { useState } from "react";

import { Minus, Plus } from "lucide-react";

import { Button } from "@referrer/ui";

import PricingButton from "./pricing-button";

export function CustomPricingCard() {
  const [stars, setStars] = useState(30);

  function onClick(adjustment: "add" | "sub") {
    let sum: number;
    if (stars >= 200) {
      if (adjustment === "add") sum = +10;
      else if (adjustment === "sub") sum = -10;
    } else {
      if (adjustment === "add") sum = +5;
      else if (adjustment === "sub") sum = -5;
    }

    setStars(Math.max(10, Math.min(1000, stars + sum)));
  }

  return (
    <>
      <div className="text-foreground text-3xl font-semibold">₹{stars * 10}</div>
      <div className="flex items-center justify-center space-x-2">
        <Button
          variant="default"
          size="icon"
          className="h-8 w-8 shrink-0 rounded-full"
          onClick={() => onClick("sub")}
          disabled={stars <= 10}>
          <Minus className="h-4 w-4" />
          <span className="sr-only">Decrease</span>
        </Button>
        <div className="flex-1 text-center">
          <div className="text-5xl font-bold tracking-tighter">
            {stars}
            <span className="mb-auto ml-3 text-xl tracking-wider">Stars</span>
          </div>
          <div className="text-muted-foreground text-[0.70rem]">Rs 10 / Starts</div>
        </div>
        <Button
          variant="default"
          size="icon"
          className="h-8 w-8 shrink-0 rounded-full"
          onClick={() => onClick("add")}
          disabled={stars >= 400}>
          <Plus className="h-4 w-4" />
          <span className="sr-only">Increase</span>
        </Button>
      </div>
      <p>Buy stars as much as you want</p>
      <PricingButton priceId="price_1NpFuaSHACf4T604Rna91pkF" quantity={stars} stars={stars} />
    </>
  );
}
