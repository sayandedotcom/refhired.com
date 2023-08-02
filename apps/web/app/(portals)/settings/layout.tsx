import { Metadata } from "next";

import { settingsNav } from "@/config";

import { Separator } from "@referrer/ui";

import { SettingsHeader, SidebarNav } from "@/components/custom-components";

export const metadata: Metadata = {
  title: "Settings",
  description: "Get job referrals to the top best companies of the world",
};

export default function Settings({ children }: { children: React.ReactNode }) {
  return (
    <div className="hidden space-y-6 p-10 pb-16 md:block">
      <div className="space-y-0.5">
        <SettingsHeader settingsNav={settingsNav} />
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <SidebarNav items={settingsNav} />
        </aside>
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </div>
  );
}
