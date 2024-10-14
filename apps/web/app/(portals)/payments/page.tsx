import { Metadata } from "next";

import { CheckCircle2 } from "lucide-react";

import { CustomPricingCard } from "@/components/custom-components";
import PricingButton from "@/components/custom-components/pricing-button";

import { plans } from "@/config";

export const metadata: Metadata = {
  title: "Payments",
  description: "Get job referrals to the top best companies of the world",
};

export default function Payments() {
  return (
    <div className="my-5 w-full">
      <h5 className="font-heading text-center">Simple pricing based on your needs.</h5>
      <div className="mx-auto mt-6 flex items-center justify-center gap-3 px-2">
        {plans.map((item, idx) => (
          <div
            key={idx}
            className={"border-border bg-muted relative flex flex-col items-stretch rounded-xl border"}>
            {item.isMostPop ? (
              <span className="bg-foreground text-background absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full border px-3 py-2 text-center text-sm font-semibold shadow-md">
                Most popular
              </span>
            ) : (
              ""
            )}
            <div className="space-y-4 border-b p-4">
              <span className="font-medium">{item.name}</span>
              <div className="text-3xl font-semibold">₹{item.price}</div>
              <p>{item.description}</p>
              <PricingButton className="z-10" planId={item.stripePriceId} stars={item.stars} />
            </div>
            <ul className="space-y-3 p-8">
              <li className="pb-2 text-xl font-medium">
                <p>Features</p>
              </li>
              {item.features.map((featureItem, idx) => (
                <li key={idx} className="flex items-center gap-5">
                  <CheckCircle2 />
                  {featureItem}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="border-border bg-muted relative flex flex-col items-stretch rounded-xl border px-6">
          <div className="space-y-4 border-b p-2">
            <span className="font-medium">Custom</span>
            <CustomPricingCard />
          </div>
          <ul className="space-y-3 p-8">
            <li className="pb-2 text-xl font-medium">
              <p>Features</p>
            </li>
            <li className="flex items-center gap-5">
              <CheckCircle2 />
              featureItem
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
