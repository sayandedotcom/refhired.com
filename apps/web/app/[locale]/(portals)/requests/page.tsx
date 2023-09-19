import { Metadata } from "next";

import { DataTable } from "@/components/ui";

export const metadata: Metadata = {
  title: "Requests",
  description: "Get job referrals to the top best companies of the world",
};

const Requests = () => {
  return <DataTable />;
};

export default Requests;
