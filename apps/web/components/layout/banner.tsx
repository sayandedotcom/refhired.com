"use client";

import { useState } from "react";

import Link from "next/link";

import clsx from "clsx";
import { CircleArrowRight, X } from "lucide-react";

export function Banner() {
  const [close, setClose] = useState(false);
  return (
    <div className={clsx("bg-indigo-600", close && "hidden")}>
      <div className="mx-auto flex max-w-screen-xl items-start justify-between px-4 py-2 text-white sm:items-center md:px-8">
        <div className="flex flex-1 items-start justify-center gap-x-4 sm:items-center">
          <div className="flex flex-none items-center justify-center rounded-full bg-indigo-800 p-1.5 px-4 text-sm font-medium">
            Alert
          </div>
          <p className="p-2 font-medium">
            This website is under development{" "}
            <Link
              href="https://github.com/sayandedotcom/refhired.com"
              className="inline-flex items-center gap-x-1 font-semibold underline duration-150 hover:text-indigo-100">
              Check out our code
              <CircleArrowRight />
            </Link>
          </p>
        </div>
        <button
          aria-label="close"
          onClick={() => setClose(!close)}
          className="rounded-lg p-2 ring-offset-2 duration-150 hover:bg-indigo-500 focus:ring">
          <X />
        </button>
      </div>
    </div>
  );
}
