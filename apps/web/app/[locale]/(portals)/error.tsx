"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong! Error portals layout</h2>
      <p>{error.message}</p>
      <p>{error?.cause as React.ReactNode}</p>
      <p>{error?.stack}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
