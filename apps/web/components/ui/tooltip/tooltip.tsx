"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@referrer/ui";

export function TooltipDemo({
  children,
  text,
  side,
}: {
  children: React.ReactNode;
  text: String;
  side?: "top" | "right" | "bottom" | "left";
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side} className="bg-foreground text-background">
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
