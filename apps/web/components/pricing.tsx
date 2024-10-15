import { CheckCircle2 } from "lucide-react";

import { CustomPricingCard } from "@/components/custom-components";
import PricingButton from "@/components/custom-components/pricing-button";
import { BackgroundGradient, BorderBeam } from "@/components/ui";

import { plans } from "@/config";

function PricingCards() {
  return (
    <>
      {plans.map((item, idx) => (
        <div
          key={idx}
          className={`bg-background font-heading relative mt-6 flex flex-1 flex-col items-stretch rounded-xl sm:mt-0 ${
            // item.isMostPop ? "" : "border-muted-foreground border"
            "border-muted-foreground border"
          }`}>
          {item.isMostPop ? (
            <BorderBeam borderWidth={3} className="-z-10" size={650} duration={12} delay={6} />
          ) : (
            <></>
          )}
          {item.isMostPop ? (
            <span className="bg-foreground text-background absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full border px-3 py-2 text-center text-sm font-semibold shadow-md">
              Most popular
            </span>
          ) : (
            ""
          )}
          <div className="space-y-4 border-b p-8">
            <span className="font-medium">{item.name}</span>
            <div className="text-foreground text-3xl font-semibold">₹{item.price}</div>
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
      <BackgroundGradient className="h-full rounded-[22px] bg-white dark:bg-zinc-900">
        {/* <div className="border-border relative mt-6 flex flex-1 flex-col items-stretch rounded-xl border sm:mt-0 "> */}
        <div className="space-y-2 border-b p-8">
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
        {/* </div> */}
      </BackgroundGradient>
    </>
  );
}

export default PricingCards;
