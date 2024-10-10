"use client";

import { Separator } from "@referrer/ui";

import { Mail } from "./components/mail";
import { accounts, mails } from "./data";

export default function MailPage() {
  // const layout = cookies().get("react-resizable-panels:layout:mail");
  // const collapsed = cookies().get("react-resizable-panels:collapsed");

  // const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  // const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

  return (
    <>
      <div className="flex flex-col">
        <Separator />
        <Mail defaultLayout={[65, 35, 30]} accounts={accounts} mails={mails} navCollapsedSize={4} />
        <Separator />
      </div>
    </>
  );
}
