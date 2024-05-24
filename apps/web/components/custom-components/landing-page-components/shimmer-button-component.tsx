import { Link } from "@/navigation";

import { ShimmerButton } from "@/components/ui";

export function ShimmerButtonComponent({ href, children }) {
  return (
    <Link href={href} className="z-10 flex min-h-[6rem] items-center justify-center">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          {children}
        </span>
      </ShimmerButton>
    </Link>
  );
}
