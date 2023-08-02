import { Metadata } from "next";
import { headers } from "next/headers";

import { Separator } from "@referrer/ui";

import { SidebarNav } from "@/components/custom-components";

export const metadata: Metadata = {
  title: "Settings",
  description: "Get job referrals to the top best companies of the world",
};

const sidebarNavItems = [
  {
    title: "profile",
    href: "/settings/profile",
    info: "Manage your profile settings and set username, bio, e-mail preferences.",
  },
  {
    title: "account",
    href: "/settings/account",
    info: "Manage your account settings.",
  },
  {
    title: "appearance",
    href: "/settings/appearance",
    info: "Manage your appearance settings .",
  },
  {
    title: "notifications",
    href: "/settings/notifications",
    info: "Manage your notifications settings .",
  },
  {
    title: "display",
    href: "/settings/display",
    info: "Manage your display settings .",
  },
  {
    title: "payments",
    href: "/settings/payments",
    info: "Manage your payments settings .",
  },
];

export default function Settings({ children }: { children: React.ReactNode }) {
  const headersList = headers();
  const path = headersList.get("x-invoke-path") || "";
  return (
    <div className="hidden space-y-6 p-10 pb-16 md:block">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight capitalize">{`${path.split("/")[2]}`}</h2>
        {sidebarNavItems.map(
          (item) =>
            path.split("/")[2] === item.title && (
              <p key={item.title} className="text-muted-foreground">
                {item.info}
              </p>
            )
        )}
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </div>
  );
}
