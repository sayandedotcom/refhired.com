import { Metadata } from "next";

import { plans } from "@/config";

import { Button } from "@referrer/ui";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Get job referrals to the top best companies of the world",
};

export default function Pricing() {
  return (
    <section className="py-14">
      <div className="text-foreground mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="relative mx-auto max-w-xl sm:text-center">
          <h1 className="font-heading font-semibold">Pricing for all everyone</h1>
          <div className="mt-3 max-w-xl">
            <h5 className="font-heading">Simple pricing based on your needs.</h5>
          </div>
        </div>
        <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className={`border-foreground relative mt-6 flex flex-1 flex-col items-stretch rounded-xl border-2 sm:mt-0 ${
                item.isMostPop ? "mt-10" : ""
              }`}>
              {item.isMostPop ? (
                <span className="bg-foreground text-background absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full border px-3 py-2 text-center text-sm font-semibold shadow-md">
                  Most popular
                </span>
              ) : (
                ""
              )}
              <div className="space-y-4 border-b p-8">
                <span className="font-medium">{item.name}</span>
                <div className="text-foreground text-3xl font-semibold">
                  ${item.price} <span className="text-foreground text-xl font-normal">/mo</span>
                </div>
                <p>{item.description}</p>
                <Button className="text-background w-full rounded-lg px-3 py-3 text-sm font-semibold duration-150">
                  Get Started
                </Button>
              </div>
              <ul className="space-y-3 p-8">
                <li className="pb-2 text-xl font-medium">
                  <p>Features</p>
                </li>
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                    </svg>
                    {featureItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
