"use client";

import { useEffect } from "react";

import { Button } from "@referrer/ui";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mt-6">
      <h4 className="font-heading">Something went wrong !</h4>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
