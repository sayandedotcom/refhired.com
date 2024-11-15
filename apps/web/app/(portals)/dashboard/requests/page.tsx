"use client";

import * as React from "react";

import { Search } from "lucide-react";

import {
  Input,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TooltipProvider,
} from "@referrer/ui";

import { MailDisplay } from "@/components/dashboard/requests/components/mail-display";
import { MailList } from "@/components/dashboard/requests/components/mail-list";
import { mails } from "@/components/dashboard/requests/data";

export function RequestsDashboard() {
  const mail = {
    id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    name: "William Smith",
    email: "williamsmith@example.com",
    subject: "Meeting Tomorrow",
    text: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.\n\nPlease come prepared with any questions or insights you may have. Looking forward to our meeting!\n\nBest regards, William",
    date: "2023-10-22T09:00:00",
    read: true,
    labels: ["meeting", "work", "important"],
  };

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(sizes)}`;
        }}
        style={{ height: "calc(100vh-65px)" }}
        className="h-[calc(100vh-65px)] items-stretch">
        <ResizablePanel defaultSize={30} minSize={20}>
          <Tabs defaultValue="all">
            <div className="flex items-center justify-between px-4 py-1">
              <p className="font-heading">Posts</p>
              <div className="bg-background/95 supports-[backdrop-filter]:bg-background/60 p-1 backdrop-blur">
                <form>
                  <div className="relative">
                    <Search className="text-muted-foreground absolute left-2 top-2.5 h-4 w-4" />
                    <Input placeholder="Search" className="pl-8" />
                  </div>
                </form>
              </div>
            </div>
            <Separator />
            <TabsContent value="all" className="mt-2">
              <MailList items={mails} />
            </TabsContent>
            <TabsContent value="unread" className="mt-2">
              <MailList items={mails?.filter((item) => !item.read)} />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={30} minSize={30}>
          <Tabs defaultValue="all">
            <div className="flex items-center px-4 py-2">
              <p className="font-heading">Requests</p>
              {/* <button className="ai-button mr-auto h-8 rounded-md">AI</button> */}
              <TabsList className="ml-auto">
                <TabsTrigger value="all" className="text-zinc-600 dark:text-zinc-200">
                  All
                </TabsTrigger>
                <TabsTrigger value="unread" className="text-zinc-600 dark:text-zinc-200">
                  Unread
                </TabsTrigger>
                <TabsTrigger value="notresponded" className="text-zinc-600 dark:text-zinc-200">
                  Not Responded
                </TabsTrigger>
              </TabsList>
            </div>
            <Separator />
            {/* <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <form>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search" className="pl-8" />
                </div>
              </form>
            </div> */}
            <TabsContent value="all" className="mt-2">
              <MailList items={mails} />
            </TabsContent>
            <TabsContent value="unread" className="mt-2">
              <MailList items={mails?.filter((item) => !item.read)} />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={40} minSize={40}>
          <MailDisplay
            mail={mail}
            // mail={mails.find((item) => item.id === mails.selected) || null}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}

export default RequestsDashboard;
