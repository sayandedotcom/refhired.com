"use client";

import Link from "next/link";
import { Button } from "@referrer/ui";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { AvatarDemo, DropdownMenuDemo, TooltipDemo } from "../ui";

export const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
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
            <Link className='text-gray-500' href='/about-us'>
              About Us
            </Link>
            <Link className='text-gray-500' href='/blogs'>
              Blogs
            </Link>
            <Link className='text-gray-500' href='/pricing'>
              Pricing
            </Link>
            <Link className='text-gray-500' href='/contact-us'>
              Contact Us
            </Link>
            <Link className='text-gray-500' href='/docs'>
              Docs
            </Link>
          </nav>

          <div className='hidden flex-1 items-center justify-end gap-4 sm:flex'>
            {session && session.user ? (
              <DropdownMenuDemo
                userName={session.user.name}
                email={session.user.email}>
                <AvatarDemo image={session.user?.image} />
              </DropdownMenuDemo>
            ) : (
              <>
                <TooltipDemo text='Log In'>
                  <Button onClick={() => router.push("/login")}>Log In</Button>
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
          </div>

          <div className='lg:hidden'>
            <button
              className='rounded-lg bg-gray-100 p-2 text-gray-600'
              type='button'>
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
  );
};