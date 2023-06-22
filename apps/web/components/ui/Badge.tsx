"use client";

import { cn } from "@referrer/lib/utils/cn";
import { BadgeProps, badgeVariants } from "@referrer/ui";

export function Badge({ children, className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </div>
  );
}
