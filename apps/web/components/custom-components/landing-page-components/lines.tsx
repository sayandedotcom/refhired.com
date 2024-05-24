"use client";

import React, { useRef } from "react";

import { User } from "lucide-react";

import { AnimatedBeam } from "@/components/ui";

// const Circle = forwardRef(({ className, children }, ref) => {
//   return (
//     <div
//       ref={ref}
//       className={cn(
//         "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
//         className
//       )}>
//       {children}
//     </div>
//   );
// });

export function Beam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="bg-background relative mx-auto flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg p-10"
      ref={containerRef}>
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row justify-between">
          <div
            className="z-10 flex h-12 w-12 flex-col items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
            ref={div1Ref}>
            <User className="text-black" />
            {/* <h3>Referrer</h3> */}
          </div>
          <div
            className="z-10 flex h-12 w-12 flex-col items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
            ref={div2Ref}>
            <User className="h-6 w-6 text-black" />
            {/* <h3>Referral</h3> */}
          </div>
        </div>
      </div>

      <AnimatedBeam duration={3} containerRef={containerRef} fromRef={div1Ref} toRef={div2Ref} />
    </div>
  );
}
