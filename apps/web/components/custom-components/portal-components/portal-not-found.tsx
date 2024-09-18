"use client";

import { RotateCcw } from "lucide-react";

import { Button } from "@referrer/ui";

export const PortalsNotFound = ({ text }) => {
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-5">
      <p>🤔 Ooops ! You have no {text} !</p>
      <Button className="rounded-full">
        <RotateCcw className="mr-2 h-4 w-4" />
        Retry
      </Button>
    </div>
  );
};
