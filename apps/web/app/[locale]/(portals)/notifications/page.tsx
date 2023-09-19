import { Metadata } from "next";

import { PortalsNotFound } from "@/components/custom-components";

export const metadata: Metadata = {
  title: "Notifications",
  description: "Get job referrals to the top best companies of the world",
};

const Notifications = () => {
  return <PortalsNotFound text="Notifications" />;
};

export default Notifications;
