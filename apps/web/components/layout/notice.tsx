"use client";

import Link from "next/link";

export const Notice = ({ children, href }: any) => {
  return (
    <Link
      href={href}
      className="group relative inline-block cursor-pointer rounded-full bg-slate-800 p-1 text-lg font-semibold leading-6 text-white no-underline  shadow-2xl shadow-zinc-900">
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative z-10 flex h-8 items-center space-x-2 rounded-full bg-zinc-950 px-7 py-2 ring-1 ring-white/10">
        <span>{children}</span>
        <svg fill="none" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </Link>
  );
};
