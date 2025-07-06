"use client";

import { cn } from "@/utils";

export function TypographyH3({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-[0.015em]", className)}>{children}</h3>
  );
}
