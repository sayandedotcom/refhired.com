"use client";

import { Button } from "@referrer/ui";
import { RotateCcw } from "lucide-react";

export const PortalsNotFound = ({ text }) => {
  return (
    <div className='flex flex-col items-center gap-5 justify-center mt-8'>
      <p>You have no {text} !</p>
      <Button iconBefore={<RotateCcw />} className='rounded-full'>
        Retry
      </Button>
    </div>
  );
};
