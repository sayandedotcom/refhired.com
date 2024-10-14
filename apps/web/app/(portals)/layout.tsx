import { Metadata } from "next";

import { unstable_setRequestLocale } from "next-intl/server";

import { Separator } from "@referrer/ui";

import { CenterSection, LeftSection, RightSection } from "@/components/custom-components";

import { Provider } from "./provider";

export const metadata: Metadata = {
  title: "Home",
  description: "Get job referrals to the top best companies of the world",
};

export default function PortalsLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Provider>
        <section className="bg-background flex scroll-smooth">
          <LeftSection />
          <Separator orientation="vertical" className=" sticky top-0 h-screen dark:bg-[#2d3134]" />
          <CenterSection>{children}</CenterSection>
          <Separator orientation="vertical" className=" sticky top-0 h-screen dark:bg-[#2d3134]" />
          <RightSection />
        </section>
      </Provider>
    </>
  );
}
