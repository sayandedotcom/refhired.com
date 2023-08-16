"use client";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

import { useSession } from "next-auth/react";
import { useLocalStorage } from "usehooks-ts";

import { Separator } from "@referrer/ui";

import {
  AuthDialog,
  NewContentSection,
  NewExtraSection, // ContentLargeSection,
  // ContentSection,
  // ExtraSection,
  NewOptionsSection,
  Walkthrough,
} from "@/components/custom-components";

import { PostSteps, Steps } from "@/config";

import { useStore } from "@/store/store";

import "../../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const setAuthDialogOpen = useStore((state) => state.setAuthDialogOpen);
  setAuthDialogOpen(!session);
  const [run, setRun] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [countIntro, setCountIntro] = useLocalStorage("count-intro", 0);
  const joyRide = useStore((state) => state.joyRide);
  const pathName = usePathname();
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showComponent, setShowComponent]);

  const showExtraSection = [
    "/dashboard",
    "/settings/profile",
    "/settings/appearance",
    "/settings/notifications",
  ].includes(pathName);

  return (
    <>
      {showComponent && countIntro < 2 && (
        <Walkthrough steps={Steps} countIntro={countIntro} setCountIntro={setCountIntro} />
      )}
      <Walkthrough steps={PostSteps} run={!!joyRide} setRun={setRun} />
      <AuthDialog>
        <section className="flex">
          <NewOptionsSection session={session?.user?.userName ?? "profile"} />
          <Separator orientation="vertical" className=" sticky top-0 h-screen dark:bg-[#2d3134]" />
          <NewContentSection>{children}</NewContentSection>
          <Separator orientation="vertical" className=" sticky top-0 h-screen dark:bg-[#2d3134]" />
          {showExtraSection ? null : <NewExtraSection />}
        </section>
      </AuthDialog>
    </>
  );
}

// const showExtraSection = [
//   "/home",
//   "/search",
//   "/notifications",
//   "/bookmarks",
//   "/messages",
//   "/requests",
//   "/applied",
//   "/post",
// ].includes(pathName);

{
  /* <ContentSection width={showExtraSection ? 38 : 40}>{children}</ContentSection> */
}
{
  /* {showExtraSection ? (
    <ContentSection>{children}</ContentSection>
    ) : (
      <ContentLargeSection>{children}</ContentLargeSection>
      )}
{showExtraSection && <ExtraSection />} */
}
