"use client";

import { Input } from "@referrer/ui";
import {
  Section,
  Testimonials,
  Usecases,
  Stats,
  Joinnow,
} from "../components/custom";

export default function Page() {
  return (
    <>
      <div className=' h-[700px] flex flex-col justify-center items-center lg:p-16'>
        <h1 className='lg:text-[86px] text-center'>
          "Navigate the Job Market with Referrals :{" "}
          <span className=' '>Your Path to Success</span>"
        </h1>
        <h5 className='text-center mt-7 px-28'>
          Used by some of the world's largest companies, Next.js enables you to
          create full-stack Web applications by extending the latest React
          features, and integrating powerful Rust-based JavaScript tooling for
          the fastest builds.
        </h5>
      </div>
      <div>
        <h2 className='text-center text-[50px]'>Claim your username now !</h2>
        <form className='flex gap-6'>
          <Input placeholder='Claim your User name now !' />
          <button type='submit' className='btn-97'>
            Claim Username
          </button>
        </form>
      </div>
      <div>
        <h2 className='text-center text-[50px]'>Why referrer ?</h2>
      </div>
      <Section />
      <Testimonials />
      <Usecases />
      <Stats />
      <Joinnow />
    </>
  );
}
