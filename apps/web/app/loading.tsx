"use client";

import { SpinLoader } from "@/components/spin-loader";

export default function Loading() {
  return (
    <div
      className="fixed left-2/4 top-2/4"
      style={{
        translate: "-50% -50%",
      }}>
      <SpinLoader />
    </div>
  );
}
