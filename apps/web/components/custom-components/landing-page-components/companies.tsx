"use client";

import { Icons } from "@/components/icons/icons";

export function Companies() {
  return (
    <div className="flex flex-col justify-center items-center my-4">
      <h4 className="">Get referrals from employees of top companies</h4>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
        <Icons.meta />
        <Icons.googleLogo />
      </div>
    </div>
  );
}
