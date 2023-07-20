import Link from "next/link";

import { Separator } from "@referrer/ui";

import { Joinnow, Section, Stats, Testimonials, Usecases, Username } from "@/components/custom-components";

// import { getAuthSession } from "./api/auth/[...nextauth]/authOptions";

export default async function Page() {
  // const session = await getAuthSession();
  const session = null;
  return (
    <>
      <div className="mt-3 flex flex-col items-center justify-center gap-10 lg:p-16">
        <h1 className="px-1 text-center text-[36px] lg:text-[86px]">
          "Navigate the Job Market with Referrals :{" "}
          <span className="">
            Connect through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
              referrals
            </span>{" "}
          </span>
          "
        </h1>
        <h5 className="mt-3 px-6 text-center text-[15px] md:mt-7 md:px-28 md:text-[20px]">
          Used by many job seekers and employees of the world's largest companies, Referrer enables you to get
          job through referrals which has the highest convertion rates among other methods . It simplifies the
          tasks for both job seekers and employees who gives referrals
        </h5>
        <Link
          className="btn-97 animate-bounce uppercase"
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
