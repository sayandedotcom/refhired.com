"use client";

import { ContentSection, ExtraSection, OptionsSection } from "@/components/custom-components";
import { Separator } from "@referrer/ui";
import "../../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const session = null;

  return (
    <div className="flex justify-center">
      <OptionsSection session={session?.user?.userName ?? "profile"} />
      <Separator orientation="vertical" className=" sticky top-0 h-screen dark:bg-[#2d3134]" />

      <ContentSection>{children}</ContentSection>

      <Separator orientation="vertical" className="sticky top-0 h-screen dark:bg-[#2d3134]" />
      <ExtraSection />
    </div>
  );
}
