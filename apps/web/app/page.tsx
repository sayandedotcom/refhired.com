import { Suspense } from "react";

import { getTranslations } from "next-intl/server";
import Starfield from "react-starfield";

import {
  Companies,
  Information,
  JoinWaitlist,
  Joinnow,
  MagicBentoComponent,
  MagicBentoThree,
  MagicBentoTwo,
  Opensource,
  Review,
  ScrollBasedVelocityCOmponent,
  ShimmerButtonComponent,
  Stats,
  TopNotificationList,
  Username,
} from "@/components/custom-components";

import Loading from "./loading";

export default async function Page() {
  // const session = await getServerSession();

  // if (session?.user) {
  //   redirect("/home");
  // }
  const t = await getTranslations("Index");

  const user = null;

  return (
    <div className="relative">
      <Starfield starCount={5000} />
      <Suspense fallback={<Loading />}>
        <TopNotificationList className="fixed right-8 top-20 z-40 hidden lg:block" />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <div className="mt-3 flex flex-col items-center justify-center gap-10 lg:p-16">
          {/* <Notice arrow href="/about-us">
          Important Notice !
        </Notice> */}
          <Suspense fallback={<Loading />}>
            <Information />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <h1 className="font-heading px-1 text-center text-[36px] lg:text-[66px] dark:bg-gradient-to-r dark:from-[#abbaab] dark:to-[#ffffff] dark:bg-clip-text dark:text-transparent">
              " Navigate the job market with{" "}
              <span className="bg-gradient-to-r from-pink-500 to-yellow-500  bg-clip-text text-transparent">
                {t("referrals")}
              </span>{" "}
              : <br />
              <span className="">
                Connect through{" "}
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  referrals
                </span>{" "}
              </span>
              "
            </h1>
          </Suspense>
          {/* <p className="px-6 text-center text-[15px] font-medium leading-normal sm:text-lg sm:leading-7 md:mt-7 md:px-28 md:text-[20px]">
          Used by many job seekers and employees of the world's largest companies, Referrer enables you to get
          job through referrals which has the highest convertion rates among other methods . It simplifies the
          tasks for both job seekers and employees who gives referrals
        </p> */}
          <Suspense fallback={<Loading />}>
            <JoinWaitlist />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <ShimmerButtonComponent href={"/home"}>Explore the MVP !</ShimmerButtonComponent>
          </Suspense>
        </div>
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Companies />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Username session={user} />
      </Suspense>

      <Suspense fallback={<Loading />}>
        {/* <Section /> */}
        <MagicBentoComponent />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <MagicBentoTwo />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <MagicBentoThree />
      </Suspense>

      {/* <Suspense fallback={<Loading />}>
        <TweetCard />
      </Suspense> */}

      {/* <Suspense fallback={<Loading />}>
        <Testimonials />
      </Suspense> */}
      <Suspense fallback={<Loading />}>
        <Review />
      </Suspense>

      {/* <Suspense fallback={<Loading />}>
        <Bento />
      </Suspense> */}

      {/* <Suspense fallback={<Loading />}>
        <Usecases />
      </Suspense> */}

      {/* <Suspense fallback={<Loading />}>
        <Features />
      </Suspense> */}

      <Suspense fallback={<Loading />}>
        <Stats />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <ScrollBasedVelocityCOmponent />
      </Suspense>

      <Suspense fallback={<Loading />}>{user && user ? <></> : <Joinnow />}</Suspense>

      <Suspense fallback={<Loading />}>
        <Opensource />
      </Suspense>
    </div>
  );
}
