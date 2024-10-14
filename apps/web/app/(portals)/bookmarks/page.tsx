import { Metadata } from "next";

import { PortalsNotFound } from "@/components/custom-components";

export const metadata: Metadata = {
  title: "Bookmarks",
  description: "Get job referrals to the top best companies of the world",
};

const Bookmarks = () => {
  return <PortalsNotFound text="Bookmarks" />;
};

export default Bookmarks;
