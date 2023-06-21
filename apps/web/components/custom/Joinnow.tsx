"use client";

import { Button } from "@referrer/ui";

export const Joinnow = () => {
  return (
    <section>
      <div className='mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-96 lg:items-center'>
        <div className='mx-auto max-w-xl text-center'>
          <h1 className='text-3xl font-extrabold sm:text-5xl'>
            Don't waste your time.
            <strong className='font-extrabold sm:block'>
              Get / Referrer a Job now
            </strong>
          </h1>

          <p className='mt-4 sm:text-xl/relaxed'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-4'>
            <Button className='block w-full rounded px-12 py-3 text-sm font-medium shadow focus:outline-none focus:ring sm:w-auto'>
              Log In
            </Button>
            <Button className='block w-full rounded px-12 py-3 text-sm font-medium shadow focus:outline-none focus:ring sm:w-auto'>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
