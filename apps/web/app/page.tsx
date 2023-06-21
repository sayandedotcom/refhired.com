"use client";

import { Separator } from "@referrer/ui";
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
          <span className=''>Connect through referrals</span>"
        </h1>
        <h5 className='text-center mt-7 px-28'>
          Used by many job seekers and employees of the world's largest
          companies, Referrer enables you to get job through referalls which has
          the highest convertion rates among other methods . It simplifies the
          tasks for both job seekers and employees who gives referalls
        </h5>
      </div>
      <Separator />
      <div className='flex flex-col justify-center items-center gap-4 py-16'>
        <h2 className='text-center text-[50px]'>Claim your username now !</h2>
        <div className='flex gap-6 normal-case'>
          <div className='flex btn-97 relative w-[1000px]'>
            <input
              placeholder='@johndoe'
              className='lowercase outline-none h-full w-10/12 text-3xl bg-inherit ml-[150px]'
            />
            <div className='top-0 bottom-1 left-1 absolute bg-slate-100'>
              <h4 className='mt-4 px-1'>referrer.com/</h4>
            </div>
          </div>
          <button type='submit' className='btn-97 uppercase'>
            Claim Username
          </button>
        </div>
      </div>
      <Separator />
      <Section />
      <Separator />
      <Testimonials />
      <Separator />
      <Usecases />
      <Separator />
      <Stats />
      <Separator />
      <Joinnow />
    </>
  );
}
