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
  "Full Stack jobs in San Francisco",
  "Javascript jobs",
  "Referrals in Google",
];

const SearchPage = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  return (
    <>
      {/* <SearchBar /> */}
      <PlaceholdersAndVanishInput
        showSugession={true}
        className={"sticky top-0 m-2 flex items-center gap-1 md:mx-auto md:gap-2 lg:w-7/12"}
        searchIconWidth={"w-[10%]"}
        placeholders={placeholders}
      />
      <Separator />
    </>
  );
};

export default SearchPage;
