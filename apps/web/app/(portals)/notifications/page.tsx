import { Metadata } from "next";

import { unstable_setRequestLocale } from "next-intl/server";

import { PortalsNotFound } from "@/components/custom-components";

export const metadata: Metadata = {
  title: "Notifications",
  description: "Get job referrals to the top best companies of the world",
};

const Notifications = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  return <PortalsNotFound text="Notifications" />;
};

export default Notifications;
