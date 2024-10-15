import { Metadata } from "next";

import PricingCards from "@/components/pricing";

export const metadata: Metadata = {
  title: "Payments",
  description: "Get job referrals to the top best companies of the world",
};

export default function Payments() {
  return (
    <div className="flex h-full w-full flex-col gap-8 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-600 py-14">
      <div className="mx-auto max-w-xl text-center">
        <h4 className="font-heading font-semibold">Pricing for all everyone</h4>
        <div className="mt-3 max-w-xl">
          <h6 className="font-heading">Simple pricing based on your needs.</h6>
        </div>
      </div>
      <div className="flex gap-3 p-4">
        <PricingCards />
      </div>
    </div>
  );
}
