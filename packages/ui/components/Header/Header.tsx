"use client";
import Link from "next/link";
import { Button } from "../Button";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  return (
    <header className='shadow-sm'>
      <div className='mx-auto max-w-screen-xl p-4'>
        <div className='flex items-center justify-between gap-4 lg:gap-10'>
          <div className='flex lg:w-0 lg:flex-1'>
            <Link href='/'>
              <span className='sr-only'>Logo</span>
              <span className='inline-block h-10 w-32 rounded-lg bg-gray-200'></span>
            </Link>
          </div>

          <nav
            aria-label='Global'
            className='hidden gap-8 text-sm font-medium md:flex'>
            <Link href='/dashboard'>Dashboard</Link>
            <Link className='text-gray-500' href='/about-us'>
              About
            </Link>
            <Link className='text-gray-500' href='/blog'>
              Blog
            </Link>
            <Link className='text-gray-500' href='/pricing'>
              Pricing
            </Link>
            <Link className='text-gray-500' href=''>
              Contact
            </Link>
          </nav>

          <div className='hidden flex-1 items-center justify-end gap-4 sm:flex'>
            <Button onClick={() => router.push("/login")}>Log in</Button>

            <Button variant='outline' onClick={() => router.push("/sign-up")}>
              Sign up
            </Button>
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
