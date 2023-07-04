import Link from "next/link";
import { Separator } from "@referrer/ui";
import {
  Joinnow,
  Section,
  Stats,
  Testimonials,
  Usecases,
  Username,
} from "@/components/custom-components";
import { getAuthSession } from "./api/auth/[...nextauth]/authOptions";

export default async function Page() {
  const session = await getAuthSession();
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
        <Link
          className='btn-97 uppercase animate-bounce'
          href={`/${session && session.user ? "home" : "sign-up"}`}>
          {session && session.user ? "Explore Now !" : "Join Now !"}
        </Link>
      </div>
      <Separator />
      <Username session={session} />
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
