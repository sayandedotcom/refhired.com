"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@referrer/ui";

export function TooltipDemo({ children, text }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className="bg-black">
          <p className="text-white">{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
