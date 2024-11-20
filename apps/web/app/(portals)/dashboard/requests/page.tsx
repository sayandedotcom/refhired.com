"use client";

import { useState } from "react";

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

import { PostsList } from "@/components/dashboard/requests/components/post-list";
import { RequestsDisplay } from "@/components/dashboard/requests/components/request-display";
import { RequestsList } from "@/components/dashboard/requests/components/request-list";
import { mails } from "@/components/dashboard/requests/data";

function RequestsDashboard() {
  const [postId, setPostId] = useState();

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        // onLayout={(sizes: number[]) => {
        //   document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(sizes)}`;
        // }}
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
              <PostsList postId={postId} setPostId={setPostId} />
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
            <TabsContent value="all" className="mt-2">
              <RequestsList items={mails} postId={postId} />
            </TabsContent>
            <TabsContent value="unread" className="mt-2">
              <RequestsList items={mails?.filter((item) => !item.read)} />
            </TabsContent>
            <TabsContent value="notresponded" className="mt-2">
              <RequestsList items={mails?.filter((item) => !item.read)} />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={40} minSize={40}>
          <RequestsDisplay
          // mail={mails.find((item) => item.id === mails.selected) || null}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}

export default RequestsDashboard;
