import { Metadata } from "next";

import { unstable_setRequestLocale } from "next-intl/server";

import { PortalsNotFound } from "@/components/custom-components";

export const metadata: Metadata = {
  title: "Booksmarks",
  description: "Get job referrals to the top best companies of the world",
};

const Bookmarks = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  return <PortalsNotFound text="Bookmarks" />;
};

export default Bookmarks;
