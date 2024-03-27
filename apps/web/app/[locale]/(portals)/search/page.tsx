import { Metadata } from "next";

import { unstable_setRequestLocale } from "next-intl/server";

import { Separator } from "@referrer/ui";

import { SearchBar } from "@/components/custom-components";

export const metadata: Metadata = {
  title: "Search",
  description: "Get job referrals to the top best companies of the world",
};

const SearchPage = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  return (
    <>
      <SearchBar />
      <Separator />
    </>
  );
};

export default SearchPage;
