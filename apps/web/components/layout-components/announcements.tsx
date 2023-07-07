"use client";

import { useState } from "react";

import clsx from "clsx";

import { Separator } from "@referrer/ui";

export const Announcements = () => {
  const [close, setClose] = useState(false);
  return (
    <>
      <div
        className={clsx(
          "relative flex items-center justify-center gap-4 bg-black px-4 py-4 text-white",
          close && "hidden"
        )}>
        <p className="text-sm font-medium">
          This website is in development mode !
          <a href="https://github.com/sayande2002/referrer" className="ml-3 inline-block underline">
            Check out the code because it is Open Source
          </a>
        </p>
      </div>
      <button
        onClick={() => setClose(!close)}
        aria-label="Dismiss"
        className={clsx(
          "absolute right-2 top-3 shrink-0 rounded-lg p-1 text-white transition hover:bg-black/20",
          close && "hidden"
        )}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <Separator />
    </>
  );
};

export default Announcements;
