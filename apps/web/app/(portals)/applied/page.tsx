import { Metadata } from "next";

import { DataTable } from "@/components/ui";

export const metadata: Metadata = {
  title: "Applied",
  description: "Get job referrals to the top best companies of the world",
};

const Applied = () => {
  return <DataTable />;
};

export default Applied;
