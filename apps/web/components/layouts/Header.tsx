"use client";

import Link from "next/link";
import { Button, Separator } from "@referrer/ui";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AvatarDemo, DropdownMenuDemo, TooltipDemo } from "../ui";
import { ThemeSwitcher } from "../custom";

export const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <>
      <header className='shadow-sm'>
        <div className='mx-auto max-w-screen-xl p-4'>
          <div className='flex items-center justify-between gap-4 lg:gap-10'>
            <div className='flex lg:w-0 lg:flex-1'>
              <TooltipDemo text='Referrer Logo'>
                <Link href='/'>
                  <span className='sr-only'>Logo</span>
                  <h2>Referrer</h2>
                </Link>
              </TooltipDemo>
            </div>

            <nav
              aria-label='Global'
              className='hidden gap-8 text-sm font-medium md:flex'>
              <Link href='/about-us'>
                <h6>About Us</h6>
              </Link>
              <Link href='/blogs'>
                <h6>Blogs</h6>
              </Link>
              <Link href='/pricing'>
                <h6>Pricing</h6>
              </Link>
              <Link href='/contact-us'>
                <h6>Contact Us</h6>
              </Link>
              <Link href='/docs'>
                <h6>Docs</h6>
              </Link>
            </nav>

            <div className='hidden flex-1 items-center justify-end gap-4 sm:flex'>
              {session && session.user ? (
                <>
                  <DropdownMenuDemo
                    userName={session.user.userName}
                    fullName={session.user.name}
                    email={session.user.email}>
                    <AvatarDemo
                      fullName={session.user.name}
                      image={session.user?.image}
                    />
                  </DropdownMenuDemo>
                  {/* <TooltipDemo text='Explore'>
                    <Button
                      iconAfter={
                        <AiOutlineArrowRight className='ml-2 font-extrabold' />
                      }
                      onClick={() => router.push("/home")}>
                      Explore !
                    </Button>
                  </TooltipDemo> */}
                </>
              ) : (
                <>
                  <TooltipDemo text='Log In'>
                    <Button onClick={() => router.push("/login")}>
                      Log In
                    </Button>
                  </TooltipDemo>
                  <TooltipDemo text='Sign Up'>
                    <Button
                      variant='outline'
                      onClick={() => router.push("/sign-up")}>
                      Sign Up
                    </Button>
                  </TooltipDemo>
                </>
              )}
              <ThemeSwitcher />
            </div>

            <div className='lg:hidden'>
              <button className='rounded-lg p-2' type='button'>
                <span className='sr-only'>Open menu</span>
                <svg
                  aria-hidden='true'
                  className='h-5 w-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M4 6h16M4 12h16M4 18h16'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
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
