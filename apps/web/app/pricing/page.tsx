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
      <div className="max-w-screen-xl mx-auto px-4 text-foreground md:px-8">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h1 className="font-heading font-semibold">Pricing for all everyone</h1>
          <div className="mt-3 max-w-xl">
            <h5 className="font-heading">Simple pricing based on your needs.</h5>
          </div>
        </div>
        <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex-1 flex items-stretch flex-col rounded-xl border-foreground border-2 mt-6 sm:mt-0 ${
                item.isMostPop ? "mt-10" : ""
              }`}>
              {item.isMostPop ? (
                <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-foreground text-center text-background text-sm font-semibold">
                  Most popular
                </span>
              ) : (
                ""
              )}
              <div className="p-8 space-y-4 border-b">
                <span className="font-medium">{item.name}</span>
                <div className="text-foreground text-3xl font-semibold">
                  ${item.price} <span className="text-xl text-foreground font-normal">/mo</span>
                </div>
                <p>{item.description}</p>
                <Button className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-background">
                  Get Started
                </Button>
              </div>
              <ul className="p-8 space-y-3">
                <li className="pb-2 font-medium text-xl">
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
