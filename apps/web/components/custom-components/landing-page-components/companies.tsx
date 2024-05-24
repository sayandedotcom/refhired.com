"use client";

import { Icons } from "@/components/icons/icons";

import Marquee from "./marquee";

export function Companies() {
  return (
    <div className="font-heading my-9 flex flex-col items-center justify-center">
      <p className="md:text-4xl">Get referrals from employees of top companies</p>
      <div className="relative my-10 flex flex-wrap items-center justify-center gap-10">
        <Marquee pauseOnHover className="w-[95vw] overflow-hidden [--duration:20s]">
          <Icons.meta className="mx-4" />
          <Icons.googleLogo className="mx-4" />
          <Icons.microsoft className="mx-4" />
          <Icons.apple className="mx-4" />
          <Icons.logo className="mx-4" />
          <Icons.tesla className="mx-4" />
          <Icons.uber className="mx-4" />
          <Icons.amazon className="mx-4" />
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
      </div>
    </div>
  );
}
