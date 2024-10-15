"use client";

import { useRouter } from "next/navigation";

import { Dialog, DialogContent } from "@referrer/ui";

import PricingCards from "@/components/pricing";

export default function PricingModal() {
  const router = useRouter();
  return (
    <Dialog defaultOpen onOpenChange={() => router.back()}>
      <DialogContent className="flex min-w-[80%] flex-col gap-10 rounded-full bg-gradient-to-b from-gray-900 to-gray-600 py-14">
        <div className="mx-auto text-center">
          <h4 className="font-heading font-semibold">Pricing for all everyone</h4>
          <div className="mt-3 ">
            <h6 className="font-heading">Simple pricing based on your needs.</h6>
          </div>
        </div>
        <div className="flex gap-3">
          <PricingCards />
        </div>
      </DialogContent>
    </Dialog>
  );
}
