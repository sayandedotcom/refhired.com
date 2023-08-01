"use client";

// import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";
import Link from "next/link";

import { useLoading } from "@/hooks";
import { useSession } from "next-auth/react";

// import { getAuthSession } from "@/app/api/auth/[...nextauth]/authOptions";
// import { signOut } from "next-auth/react";
import { Separator, buttonVariants } from "@referrer/ui";

import { ThemeSwitcher } from "@/components/custom-components";

import { Icons } from "../icons/icons";
import { AvatarDemo, DropdownMenuDemo, TooltipDemo } from "../ui";

export const Header = () => {
  // const user = await getCurrentUser();
  // const router = useRouter();
  const { data: session } = useSession();
  const { loadingValue, setLoadingValue } = useLoading();
  // const session = await getAuthSession();

  const user = null;
  // console.log("session", session);

  return (
    <>
      <header className="shadow-sm">
        <div className="mx-auto max-w-screen-xl p-4">
          <div className="flex items-center justify-between gap-4 lg:gap-10">
            <div className="flex items-center justify-center lg:w-0 lg:flex-1">
              <TooltipDemo text="Refhired.com">
                <Link href="/" className="flex items-center justify-center gap-5">
                  <Icons.logo />
                  <h3 className="font-heading">Refhired.com</h3>
                  {/* <h3 className="font-heading">rh.</h3> */}
                </Link>
              </TooltipDemo>
            </div>

            <nav aria-label="Global" className="hidden gap-8 text-sm font-medium md:flex">
              <Link href="/about-us">
                <h6>About Us</h6>
              </Link>
              <Link href="/blogs">
                <h6>Blogs</h6>
              </Link>
              <Link href="/pricing">
                <h6>Pricing</h6>
              </Link>
              <Link href="/contact-us">
                <h6>Contact Us</h6>
              </Link>
              <Link href="/docs">
                <h6>Docs</h6>
              </Link>
            </nav>

            <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
              {session && session.user ? (
                <>
                  <DropdownMenuDemo
                    userName={session.user.userName}
                    fullName={session.user.name}
                    email={session.user.email}>
                    <AvatarDemo fullName={session.user.name} image={session.user?.image} />
                  </DropdownMenuDemo>
                </>
              ) : (
                <>
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
                  <TooltipDemo text="Sign Up">
                    <Link
                      onClick={() => setLoadingValue("signUpRedirect")}
                      className={buttonVariants({ variant: "secondary" })}
                      href="/sign-up">
                      {loadingValue === "signUpRedirect" && (
                        <Icons.spinner className="h-5 w-5 animate-spin mr-2" />
                      )}
                      Sign Up
                    </Link>
                  </TooltipDemo>
                  {/* <Button onClick={() => signOut()}>Log Out</Button> */}
                </>
              )}
              <ThemeSwitcher />
            </div>

            <div className="lg:hidden">
              <button className="rounded-lg p-2" type="button">
                <span className="sr-only">Open menu</span>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <Separator />
    </>
  );
};
