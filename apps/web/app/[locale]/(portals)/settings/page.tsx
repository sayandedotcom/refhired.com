import { Metadata } from "next";

import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Settings",
  description: "Settings of Refhired.com",
};

export default function Settings({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  return null;
}
