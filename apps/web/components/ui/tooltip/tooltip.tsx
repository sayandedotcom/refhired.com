"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@referrer/ui";

export function TooltipDemo({ children, text }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className="bg-muted/95">
          <p className="text-foreground">{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
