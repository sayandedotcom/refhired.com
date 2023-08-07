"use client";

import { Icons } from "@/components/icons/icons";

export function Companies() {
  return (
    <div className="font-heading my-9 flex flex-col items-center justify-center">
      <h4 className="">Get referrals from employees of top companies</h4>
      <div className="my-10 flex flex-wrap items-center justify-center gap-10">
        <Icons.meta />
        <Icons.googleLogo />
        <Icons.microsoft />
        <Icons.apple />
        <Icons.logo />
        <Icons.tesla />
        <Icons.uber />
        <Icons.amazon />
        {/* <Icons.logo /> */}
      </div>
    </div>
  );
}
