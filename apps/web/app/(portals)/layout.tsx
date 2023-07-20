"use client";

import { usePathname } from "next/navigation";

import { Separator } from "@referrer/ui";

import {
  ContentLargeSection,
  ContentSection,
  ExtraSection,
  OptionsSection,
} from "@/components/custom-components";

import "../../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const showExtraSection = ["/home", "/search", "/notifications", "/bookmarks", "/messages"].includes(
    pathName
  );
  const session = null;

  return (
    <div className="flex justify-center">
      <OptionsSection session={session?.user?.userName ?? "profile"} />
      <Separator orientation="vertical" className=" sticky top-0 h-screen dark:bg-[#2d3134]" />

      {/* <ContentSection width={showExtraSection ? 38 : 40}>{children}</ContentSection> */}
      {showExtraSection ? (
        <ContentSection>{children}</ContentSection>
      ) : (
        <ContentLargeSection>{children}</ContentLargeSection>
      )}

      <Separator orientation="vertical" className="sticky top-0 h-screen dark:bg-[#2d3134]" />
      {showExtraSection && <ExtraSection />}
    </div>
  );
}
