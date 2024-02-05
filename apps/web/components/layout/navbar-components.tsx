"use client";

import { useState } from "react";

import { useLoading } from "@/hooks";
import { Link, usePathname } from "@/navigation";

import { buttonVariants } from "@referrer/ui";

import { navigation } from "@/config";

import { ThemeSwitcher } from "../custom-components";
import { Icons } from "../icons/icons";
import { AvatarDemo, DropdownMenuDemo, TooltipDemo } from "../ui";

export const NavButtonsUnAuthenticated = () => {
  const { loadingValue, setLoadingValue } = useLoading();
  return (
    <ul className="flex flex-col-reverse items-center space-x-0 lg:flex-row lg:space-x-6">
      <li className="mt-4 lg:mt-0">
        <TooltipDemo text="Log In">
          <Link
            onClick={() => setLoadingValue("logInRedirect")}
            className={buttonVariants()}
            href="/auth/login">
            {loadingValue === "logInRedirect" && <Icons.spinner className="mr-2 h-5 w-5 animate-spin" />}
            Log In
          </Link>
        </TooltipDemo>
      </li>
      <li className="mt-8 lg:mt-0">
        <TooltipDemo text="Sign Up">
          <Link
            onClick={() => setLoadingValue("signUpRedirect")}
            className={buttonVariants({ variant: "outline" })}
            href="/auth/sign-up">
            {loadingValue === "signUpRedirect" && <Icons.spinner className="mr-2 h-5 w-5 animate-spin" />}
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
  );
};

export const NavButtonsAuthenticated = ({ session }) => {
  return (
    <ul className="flex items-center justify-center space-x-0 lg:flex-row lg:space-x-6">
      {/* <li>
        <TooltipDemo text="Log Out">
          <Button onClick={() => signOut()}>Log Out</Button>
        </TooltipDemo>
      </li> */}
      <li>
        <DropdownMenuDemo
          userName={session.user?.userName}
          name={session.user?.name}
          email={session.user?.email}>
          <AvatarDemo fullName={session.user.name} image={session.user.image} />
        </DropdownMenuDemo>
      </li>
    </ul>
  );
};

export const NavList = () => {
  const path = usePathname();
  return (
    <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
      {navigation.map((item, idx) => {
        return (
          <li
            key={idx}
            className={`text-muted-foreground text-base font-medium ${
              path === item.path ? "text-primary font-bold" : ""
            }`}>
            <Link href={item.path}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export const NavButton = () => {
  const [state, setState] = useState(false);
  return (
    <button
      className="rounded-md p-2 outline-none focus:border focus:border-gray-400"
      onClick={() => setState(!state)}>
      {state ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
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
  );
};
