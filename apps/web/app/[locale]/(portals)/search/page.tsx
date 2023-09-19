import { Metadata } from "next";

import { Separator } from "@referrer/ui";

import { SearchBar } from "@/components/custom-components";

export const metadata: Metadata = {
  title: "Search",
  description: "Get job referrals to the top best companies of the world",
};

const SearchPage = () => {
  return (
    <>
      <SearchBar />
      <Separator />
    </>
  );
};

export default SearchPage;
