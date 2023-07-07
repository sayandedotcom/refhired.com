import { Metadata } from "next";

import { PortalsNotFound } from "@/components/custom-components";

export const metadata: Metadata = {
  title: "Applied",
  description: "Get job referrals to the top best companies of the world",
};

const Applied = () => {
  return <PortalsNotFound text="Applied" />;
};

export default Applied;
