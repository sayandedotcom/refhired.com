import { Suspense } from "react";

import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import { Separator } from "@referrer/ui";

import {
  Companies,
  Infotmation,
  JoinWaitlist,
  Joinnow,
  Opensource,
  Review,
  Section,
  Stats,
  TopNotificationList,
  Usecases,
  Username,
} from "@/components/custom-components";

import Loading from "./loading";

export default function Page({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  // const { user } = await getAuthSession();
  const t = useTranslations("Index");

  const user = null;

  return (
    <div className="relative">
      <Suspense fallback={<Loading />}>
        <TopNotificationList className="absolute right-8 top-5 hidden lg:block" />
      </Suspense>
      <div className="mt-3 flex flex-col items-center justify-center gap-10 lg:p-16">
        {/* <Notice arrow href="/about-us">
          Important Notice !
        </Notice> */}
        <Infotmation />
        <h1 className="font-heading px-1 text-center text-[36px] dark:bg-gradient-to-r dark:from-[#abbaab] dark:to-[#ffffff] dark:bg-clip-text dark:text-transparent lg:text-[86px]">
          " Navigate the job market with{" "}
          <span className="bg-gradient-to-r from-pink-500 to-yellow-500  bg-clip-text text-transparent">
            {t("referrals")}
          </span>{" "}
          :{" "}
          <span className="">
            Connect through{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              referrals
            </span>{" "}
          </span>
          "
        </h1>
        {/* <p className="px-6 text-center text-[15px] font-medium leading-normal sm:text-lg sm:leading-7 md:mt-7 md:px-28 md:text-[20px]">
          Used by many job seekers and employees of the world's largest companies, Referrer enables you to get
          job through referrals which has the highest convertion rates among other methods . It simplifies the
          tasks for both job seekers and employees who gives referrals
        </p> */}
        <Suspense fallback={<Loading />}>
          <JoinWaitlist />
        </Suspense>
        <Link className="btn-97 animate-bounce uppercase" href="/home">
          Explore the MVP !
        </Link>
      </div>
      <Separator />
      <Suspense fallback={<Loading />}>
        <Companies />
      </Suspense>
      <Separator />
      <Suspense fallback={<Loading />}>
        <Username session={user} />
      </Suspense>
      <Separator />
      <Suspense fallback={<Loading />}>
        <Section />
      </Suspense>
      <Separator />
      {/* <Suspense fallback={<Loading />}>
        <Testimonials />
      </Suspense> */}
      <Suspense fallback={<Loading />}>
        <Review />
      </Suspense>
      {/* <Suspense fallback={<Loading />}>
        <Bento />
      </Suspense> */}
      <Separator />
      <Suspense fallback={<Loading />}>
        <Usecases />
      </Suspense>
      <Separator />
      <Suspense fallback={<Loading />}>
        <Stats />
      </Suspense>
      <Separator />
      <Suspense fallback={<Loading />}>{user && user ? <></> : <Joinnow />}</Suspense>
      <Suspense fallback={<Loading />}>
        <Opensource />
      </Suspense>
    </div>
  );
}
