"use client";

import { useRouter } from "next/navigation";

import Pricing from "@/app/pricing/page";

import { Dialog, DialogContent } from "@referrer/ui";

export default function PricingModal() {
  const router = useRouter();
  return (
    <Dialog defaultOpen onOpenChange={() => router.back()}>
      {/* <DialogTrigger>{children}</DialogTrigger> */}
      <DialogContent className="w-96">
        <Pricing />
      </DialogContent>
    </Dialog>
  );
}
