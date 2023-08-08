"use client";

import { useState } from "react";

import { usePathname } from "next/navigation";

import { Steps } from "@/config";

import { Separator } from "@referrer/ui";

import {
  NewContentSection,
  NewExtraSection, // ContentLargeSection,
  // ContentSection,
  // ExtraSection,
  NewOptionsSection,
  Walkthrough,
} from "@/components/custom-components";

import "../../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const showExtraSection = [
    "/home",
    "/search",
    "/notifications",
    "/bookmarks",
    "/messages",
    "/requests",
    "/applied",
  ].includes(pathName);

  const [run, setRun] = useState(true);

  const session = null;

  return (
    <>
      <Walkthrough steps={Steps} run={run} setRun={setRun} />
      <section className="flex justify-between">
        <NewOptionsSection session={session?.user?.userName ?? "profile"} />
        <Separator orientation="vertical" className=" sticky top-0 h-screen dark:bg-[#2d3134]" />
        <NewContentSection>{children}</NewContentSection>
        <Separator orientation="vertical" className=" sticky top-0 h-screen dark:bg-[#2d3134]" />
        {showExtraSection && <NewExtraSection />}
        {/* <Separator orientation="vertical" className=" sticky top-0 h-screen dark:bg-[#2d3134]" /> */}
        {/* <ContentSection width={showExtraSection ? 38 : 40}>{children}</ContentSection> */}
        {/* {showExtraSection ? (
        <ContentSection>{children}</ContentSection>
      ) : (
        <ContentLargeSection>{children}</ContentLargeSection>
      )}

      <Separator orientation="vertical" className="sticky top-0 h-screen dark:bg-[#2d3134]" />
      {showExtraSection && <ExtraSection />} */}
      </section>
    </>
  );
}
