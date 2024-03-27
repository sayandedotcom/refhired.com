import { Metadata } from "next";

import { unstable_setRequestLocale } from "next-intl/server";

import { DataTable } from "@/components/ui";

export const metadata: Metadata = {
  title: "Applied",
  description: "Get job referrals to the top best companies of the world",
};

const Applied = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  return <DataTable />;
};

export default Applied;
