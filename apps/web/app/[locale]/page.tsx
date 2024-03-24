import { Link } from "@/navigation";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { getSession } from "@/actions/sessions";

import { Separator } from "@referrer/ui";

import {
  Companies,
  Joinnow,
  Section,
  Stats,
  Testimonials,
  Usecases,
  Username,
} from "@/components/custom-components";

export default async function Page({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  // const t = await getTranslator(locale, "Index");
  const t = await getTranslations("Index");

  const session = await getSession();

  return (
    <>
      <div className="mt-3 flex flex-col items-center justify-center gap-10 lg:p-16">
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
        <p className="text-muted-foreground mt-3 px-6 text-center text-[15px] leading-normal sm:text-lg sm:leading-7 md:mt-7 md:px-28 md:text-[20px]">
          Used by many job seekers and employees of the world's largest companies, Referrer enables you to get
          job through referrals which has the highest convertion rates among other methods . It simplifies the
          tasks for both job seekers and employees who gives referrals
        </p>
        <Link className="btn-97 animate-bounce uppercase" href={`/${session ? "home" : "sign-up"}`}>
          {session && session ? "Explore Now !" : "Join Now !"}
        </Link>
      </div>
      <Separator />
      <Companies />
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
      {session && session ? <></> : <Joinnow />}
      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Proudly Open Source</h2>
          <p className="text-muted-foreground max-w-[85%] leading-normal sm:text-lg sm:leading-7">
            Taxonomy is open source and powered by open source software. <br /> The code is available on{" "}
            <Link href="/" target="_blank" rel="noreferrer" className="underline underline-offset-4">
              GitHub
            </Link>
            .{" "}
          </p>

          <Link href="/" target="_blank" rel="noreferrer" className="flex">
            <div className="border-muted bg-muted flex h-10 w-10 items-center justify-center space-x-2 rounded-md border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="text-foreground h-5 w-5">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </div>
            <div className="flex items-center">
              <div className="border-muted h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-y-transparent"></div>
              <div className="border-muted bg-muted flex h-10 items-center rounded-md border px-4 font-medium">
                stars on GitHub
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
