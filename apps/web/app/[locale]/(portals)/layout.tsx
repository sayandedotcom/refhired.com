import { unstable_setRequestLocale } from "next-intl/server";

import { Separator } from "@referrer/ui";

import { NewContentSection, NewExtraSection, NewOptionsSection } from "@/components/custom-components";

import { Provider } from "./provider";

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
        <section className="flex scroll-smooth">
          <NewOptionsSection />
          <Separator orientation="vertical" className=" sticky top-0 h-screen dark:bg-[#2d3134]" />
          <NewContentSection>{children}</NewContentSection>
          <Separator orientation="vertical" className=" sticky top-0 h-screen dark:bg-[#2d3134]" />
          <NewExtraSection />
        </section>
      </Provider>
    </>
  );
}
