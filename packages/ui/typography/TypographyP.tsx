"use client";

import { cn } from "@/utils";

export function TypographyP({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("leading-7", className)}>{children}</p>;
}
// [&:not(:first-child)]:mt-6
