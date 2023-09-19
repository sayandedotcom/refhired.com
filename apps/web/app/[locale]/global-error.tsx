"use client";

import { Button } from "@referrer/ui";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong! Global Error</h2>
        <p>name{error.name}</p>
        <p>digest{error.digest}</p>
        <p>message{error.message}</p>
        <p>stack{error.stack}</p>
        <Button onClick={() => reset()}>Try again</Button>
      </body>
    </html>
  );
}
