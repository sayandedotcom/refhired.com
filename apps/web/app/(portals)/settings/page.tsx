import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Settings",
  description: "Settings of Refhired.com",
};

export default function Settings() {
  redirect("/settings/profile");
}
