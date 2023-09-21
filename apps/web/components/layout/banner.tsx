"use client";

import { useState } from "react";

import Link from "next/link";

import clsx from "clsx";

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
              href="https://github.com/sayande2002/refhired.com"
              className="inline-flex items-center gap-x-1 font-semibold underline duration-150 hover:text-indigo-100">
              Check out our code
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </p>
        </div>
        <button
          onClick={() => setClose(!close)}
          className="rounded-lg p-2 ring-offset-2 duration-150 hover:bg-indigo-500 focus:ring">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
