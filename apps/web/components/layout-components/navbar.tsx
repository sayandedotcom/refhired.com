"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/config";
import { useLoading } from "@/hooks";

import { buttonVariants } from "@referrer/ui";

import { ThemeSwitcher } from "../custom-components";
import { Icons } from "../icons/icons";
import { TooltipDemo } from "../ui";

export function Navbar() {
  const [state, setState] = useState(false);
  const path = usePathname();
  const { loadingValue, setLoadingValue } = useLoading();

  return (
    <nav className="w-full top-0 z-20">
      <div className="items-center px-4 max-w-screen-2xl mx-auto md:px-6 lg:flex">
        <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
          <TooltipDemo text="Refhired.com">
            <Link href="/" className="flex items-center justify-around gap-3">
              <Icons.logo />
              <h4 className="font-heading mt-2">Refhired.com</h4>
            </Link>
          </TooltipDemo>
          <div className="lg:hidden">
            <button
              className="outline-none p-2 rounded-md focus:border-gray-400 focus:border"
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
          className={`flex-1 justify-between items-center flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
            state ? "h-screen pb-20 overflow-auto pr-4" : "hidden"
          }`}>
          <div>
            <ul className="flex flex-col-reverse items-center space-x-0 lg:space-x-6 lg:flex-row">
              <li className="mt-4 lg:mt-0">
                <TooltipDemo text="Log In">
                  <Link
                    onClick={() => setLoadingValue("logInRedirect")}
                    className={buttonVariants()}
                    href="/login">
                    {loadingValue === "logInRedirect" && (
                      <Icons.spinner className="h-5 w-5 animate-spin mr-2" />
                    )}
                    Log In
                  </Link>
                </TooltipDemo>
              </li>
              <li className="mt-8 lg:mt-0">
                <TooltipDemo text="Sign Up">
                  <Link
                    onClick={() => setLoadingValue("signUpRedirect")}
                    className={buttonVariants({ variant: "outline" })}
                    href="/sign-up">
                    {loadingValue === "signUpRedirect" && (
                      <Icons.spinner className="h-5 w-5 animate-spin mr-2" />
                    )}
                    Sign Up
                  </Link>
                </TooltipDemo>
              </li>
              {/* <li>
                <Button onClick={() => signOut()}>Log Out</Button>
              </li> */}
              <li>
                <ThemeSwitcher />
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className={`text-popover-foreground text-base font-semibold ${
                      path === item.path ? "line-through" : ""
                    }`}>
                    <Link href={item.path}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
