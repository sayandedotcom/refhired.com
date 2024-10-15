import { Metadata } from "next";

import { PagesHeading } from "@/components/custom-components";
import PricingCards from "@/components/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Get job referrals to the top best companies of the world",
};

export default function Pricing() {
  return (
    <section className="py-14">
      <div className="text-foreground mx-auto max-w-full md:px-8">
        <PagesHeading heading="Pricing for all everyone" desc="Simple pricing based on your needs." />
        <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-4">
          <PricingCards />
        </div>
      </div>
    </section>
  );
}
