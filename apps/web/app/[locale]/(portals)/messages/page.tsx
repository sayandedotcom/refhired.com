import { Metadata } from "next";

import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Messages",
  description: "Get job referrals to the top best companies of the world",
};

const Messages = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  return <>Messages</>;
};

export default Messages;
