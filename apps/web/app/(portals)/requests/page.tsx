import { Metadata } from "next";

import { PortalsNotFound } from "@/components/custom-components";

export const metadata: Metadata = {
  title: "Requests",
  description: "Get job referrals to the top best companies of the world",
};

const Requests = () => {
  return <PortalsNotFound text="Requests" />;
};

export default Requests;
