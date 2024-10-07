import { Metadata } from "next";

import { unstable_setRequestLocale } from "next-intl/server";

import { Separator } from "@referrer/ui";

import { PlaceholdersAndVanishInput } from "@/components/ui";

export const metadata: Metadata = {
  title: "Search",
  description: "Get job referrals to the top best companies of the world",
};
const placeholders = [
  "Remote Front-End Developer jobs",
  "Type ctrl+/ to search",
  "Full Stack jobs in San Francisco",
  "Javascript jobs",
  "Referrals in Google",
];

const SearchPage = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  return (
    <>
      {/* <SearchBar /> */}
      <PlaceholdersAndVanishInput placeholders={placeholders} />
      <Separator />
    </>
  );
};

export default SearchPage;
