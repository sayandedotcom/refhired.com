import { Metadata } from "next";

import { CheckCircle2 } from "lucide-react";
import { unstable_setRequestLocale } from "next-intl/server";

import { CustomPricingCard } from "@/components/custom-components";
import PricingButton from "@/components/custom-components/pricing-button";
import { BackgroundGradient, BorderBeam } from "@/components/ui";

import { plans } from "@/config";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Get job referrals to the top best companies of the world",
};

export default async function Pricing({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  return (
    <section className="py-14">
      <div className="text-foreground mx-auto max-w-full md:px-8">
        <div className="relative mx-auto max-w-xl text-center">
          <h1 className="font-heading font-semibold">Pricing for all everyone</h1>
          <div className="mt-3 max-w-xl">
            <h5 className="font-heading">Simple pricing based on your needs.</h5>
          </div>
        </div>
        <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-4">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className={`relative mt-6 flex flex-1 flex-col items-stretch rounded-xl sm:mt-0 ${
                // item.isMostPop ? "border-foreground mt-10 border-2" :
                "border-border border"
              }`}>
              {item.isMostPop ? <BorderBeam borderWidth={3} size={650} duration={12} delay={6} /> : <></>}
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
                <PricingButton planId={item.stripePriceId} stars={item.stars} />
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
        </div>
      </div>
    </section>
  );
}
