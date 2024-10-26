import Link from "next/link";

import { ShimmerButton } from "@/components/ui";

export function ShimmerButtonComponent({ href, children }) {
  return (
    // min-h-[2rem]
    <Link href={href} className="z-10 flex  items-center justify-center">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap px-4 text-center text-sm font-medium leading-none tracking-tight text-white lg:text-xl dark:from-white dark:to-slate-900/10">
          {children}
        </span>
      </ShimmerButton>
    </Link>
  );
}
