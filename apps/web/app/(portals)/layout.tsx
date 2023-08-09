"use client";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

import { PostSteps, Steps } from "@/config";
import { useLocalStorage } from "usehooks-ts";

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
  const [run, setRun] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [countIntro, setCountIntro] = useLocalStorage("count-intro", 0);

  const pathName = usePathname();
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showComponent, setShowComponent]);

  const showExtraSection = [
    "/home",
    "/search",
    "/notifications",
    "/bookmarks",
    "/messages",
    "/requests",
    "/applied",
    "/post",
  ].includes(pathName);

  const session = null;

  return (
    <>
      {showComponent && countIntro < 2 && (
        <Walkthrough steps={Steps} countIntro={countIntro} setCountIntro={setCountIntro} />
      )}
      <Walkthrough steps={PostSteps} run={run} setRun={setRun} />
      <section className="flex">
        <NewOptionsSection session={session?.user?.userName ?? "profile"} />
        <Separator orientation="vertical" className=" sticky top-0 h-screen dark:bg-[#2d3134]" />
        <NewContentSection>{children}</NewContentSection>
        <Separator orientation="vertical" className=" sticky top-0 h-screen dark:bg-[#2d3134]" />
        {showExtraSection && <NewExtraSection />}
        {/* <ContentSection width={showExtraSection ? 38 : 40}>{children}</ContentSection> */}
        {/* {showExtraSection ? (
        <ContentSection>{children}</ContentSection>
      ) : (
        <ContentLargeSection>{children}</ContentLargeSection>
      )}
      {showExtraSection && <ExtraSection />} */}
      </section>
    </>
  );
}
