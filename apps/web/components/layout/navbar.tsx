"use client";

import { useState } from "react";

import { Link } from "@/navigation";
// import Link from "next/link";
import { useSession } from "next-auth/react";

import { siteConfig } from "@/config";

import { Icons } from "../icons/icons";
import { TooltipDemo } from "../ui";
import { NavButtonsAuthenticated, NavButtonsUnAuthenticated, NavList } from "./navbar-components";

export function Navbar() {
  const { data: session, status, update } = useSession();
  const [state, setState] = useState(false);
  return (
    <nav className="top-0 z-20 w-full">
      <div className="mx-auto max-w-screen-2xl items-center px-4 md:px-6 lg:flex">
        <div className="flex items-center justify-between py-3 lg:block lg:py-4">
          <TooltipDemo text={siteConfig.name}>
            <Link href="/" className="flex items-center justify-around gap-3">
              <Icons.logo />
              <h4 className="font-heading mt-2">{siteConfig.name}</h4>
            </Link>
          </TooltipDemo>
          <div className="lg:hidden">
            <button
              className="rounded-md p-2 outline-none focus:border focus:border-gray-400"
              onClick={() => setState(!state)}>
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 flex-row-reverse items-center justify-between lg:flex lg:h-auto lg:overflow-visible lg:pb-0 lg:pr-0 ${
            state ? "h-screen overflow-auto pb-20 pr-4" : "hidden"
          }`}>
          <div>{session ? <NavButtonsAuthenticated session={session} /> : <NavButtonsUnAuthenticated />}</div>
          <div className="flex-1">
            <NavList />
          </div>
        </div>
      </div>
    </nav>
  );
}
