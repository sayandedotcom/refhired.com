"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useLoading } from "@/hooks";

import { Button } from "@referrer/ui";

import { navigation, siteConfig } from "@/config";

import { Icons } from "../icons/icons";
import { AvatarDemo, DropdownMenuDemo, TooltipDemo } from "../ui";

export const NavButtonsUnAuthenticated = () => {
  const { loadingValue, setLoadingValue } = useLoading();
  const router = useRouter();
  const handleCLick = (redirect, loadingValue) => {
    setLoadingValue(loadingValue);
    router.push(`/auth/${redirect}`);
  };
  return (
    <ul className="hidden items-center space-x-0 lg:flex lg:flex-row lg:space-x-6">
      <li className="mt-4 lg:mt-0">
        <TooltipDemo text="Log In">
          <Button
            className="font-heading h-[3.2rem] w-32 rounded-full text-xl hover:rounded-xl"
            onClick={() => handleCLick("login", "logInRedirect")}
            // className={buttonVariants()}
            disabled={siteConfig.waitlist}
            // href="/auth/login"
          >
            {loadingValue === "logInRedirect" && <Icons.spinner className="mr-2 h-5 w-5 animate-spin" />}
            Login
          </Button>
        </TooltipDemo>
      </li>
      {/* <li className="mt-8 lg:mt-0">
        <TooltipDemo text="Sign Up">
          <Button
            onClick={() => handleCLick("sign-up", "signUpRedirect")}
            // className={buttonVariants({ variant: "outline" })}
            // href="/auth/sign-up"
            disabled={siteConfig.waitlist}
            variant="outline">
            {loadingValue === "signUpRedirect" && <Icons.spinner className="mr-2 h-5 w-5 animate-spin" />}
            Sign Up
          </Button>
        </TooltipDemo>
      </li> */}
      {/* <li>
        <Button onClick={() => signOut()}>Log Out</Button>
      </li> */}
    </ul>
  );
};

export const NavButtonsAuthenticated = ({ session }) => {
  const { loadingValue, setLoadingValue } = useLoading();
  const router = useRouter();
  const handleCLick = (redirect, loadingValue) => {
    setLoadingValue(loadingValue);
    router.push(`/${redirect}`);
  };
  return (
    <ul className="flex items-center justify-center space-x-0 lg:flex-row lg:space-x-6">
      <li>
        <Button
          className="font-heading h-[3.2rem] rounded-full px-7 text-xl uppercase hover:rounded-xl"
          onClick={() => handleCLick("home", "homeRedirect")}
          disabled={siteConfig.waitlist}>
          {loadingValue === "homeRedirect" && <Icons.spinner className="mr-2 h-5 w-5 animate-spin" />}
          Explore
        </Button>
      </li>
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
    <ul className="items-center justify-center space-y-8 bg-blue-600 lg:flex lg:space-x-6 lg:space-y-0">
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
      className="rounded-md bg-green-500 p-2 outline-none focus:border focus:border-gray-400"
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
