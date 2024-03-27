"use client";

import { usePathname } from "@/navigation";

// import { unstable_setRequestLocale } from "next-intl/server";
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
  // const { data: session } = useSession();

  // const setAuthDialogOpen = useStore((state) => state.setAuthDialogOpen);
  // unstable_setRequestLocale(locale);
  // setAuthDialogOpen(!session);

  const pathName = usePathname();

  const showExtraSection = [
    "/dashboard",
    "/settings/profile",
    "/settings/appearance",
    "/settings/notifications",
  ].includes(pathName);

  return (
    <>
      <Provider>
        <section className="flex scroll-smooth">
          <NewOptionsSection />
          <Separator orientation="vertical" className=" sticky top-0 h-screen dark:bg-[#2d3134]" />
          <NewContentSection>{children}</NewContentSection>
          <Separator orientation="vertical" className=" sticky top-0 h-screen dark:bg-[#2d3134]" />
          {showExtraSection ? null : <NewExtraSection />}
        </section>
      </Provider>
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
