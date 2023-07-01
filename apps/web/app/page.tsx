"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Separator } from "@referrer/ui";
import {
  Section,
  Testimonials,
  Usecases,
  Stats,
  Joinnow,
} from "../components/custom";

export default function Page() {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <>
      <div className='flex flex-col justify-center items-center lg:p-16 gap-10 mt-3'>
        <h1 className='text-[36px] px-1 lg:text-[86px] text-center'>
          "Navigate the Job Market with Referrals :{" "}
          <span className=''>Connect through referrals</span>"
        </h1>
        <h5 className='text-center mt-3 md:mt-7 px-6 md:px-28 text-[15px] md:text-[20px]'>
          Used by many job seekers and employees of the world's largest
          companies, Referrer enables you to get job through referalls which has
          the highest convertion rates among other methods . It simplifies the
          tasks for both job seekers and employees who gives referalls
        </h5>
        <button
          onClick={() =>
            router.push(session && session.user ? "/home" : "/sign-up")
          }
          className='btn-97 uppercase animate-bounce'>
          {session && session.user ? "Explore Now !" : "Join Now !"}
        </button>
      </div>
      <Separator />
      <div className='flex flex-col justify-center items-center gap-4 py-16'>
        {session && session.user ? (
          <h1 className='text-center text-[30px] md:text-[50px]'>
            You are already logged in !
          </h1>
        ) : (
          <>
            <h2 className='text-center px-2 text-[30px] md:text-[50px]'>
              Claim your username now !
            </h2>
            <div className='w-11/12 lg:h-full lg:w-auto flex flex-col lg:flex-row gap-4 justify-center lg:gap-6 normal-case'>
              <div className='flex btn-97 relative w-full lg:w-[1000px]'>
                <input
                  placeholder='@johndoe'
                  className='lowercase outline-none h-full w-10/12 text-[20px] md:text-[28px] bg-inherit ml-[100px] md:ml-[150px]'
                />
                <div className='top-0 bottom-1 left-1 absolute bg-slate-100'>
                  <p className='mt-4 px-1 text-[20px] md:text-[28px]'>
                    referrer.com/
                  </p>
                </div>
              </div>
              <button type='submit' className='btn-97 uppercase'>
                Claim Username
              </button>
            </div>
          </>
        )}
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
      {session && session.user ? <></> : <Joinnow />}
    </>
  );
}
