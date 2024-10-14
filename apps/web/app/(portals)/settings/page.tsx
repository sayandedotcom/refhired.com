import { Metadata } from "next";

import { redirect } from "@/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Settings",
  description: "Settings of Refhired.com",
};

export default function Settings({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  redirect("/settings/profile");
  return;
}
