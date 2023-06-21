"use client";

import { cn } from "@referrer/lib/utils/cn";

export function TypographySmall({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <small
      className={cn(
        "text-sm font-medium leading-none tracking-[0.045em]",
        className
      )}>
      {children}
    </small>
  );
}
