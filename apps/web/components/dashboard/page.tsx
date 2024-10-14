"use client";

import { useCallback } from "react";

import dynamic from "next/dynamic";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import Loading from "@/app/loading";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@referrer/ui";

import { RecentSales } from "@/components/dashboard/components/recent-sales";
import { columns } from "@/components/ui/data-table/components/columns";
// import { DataTable } from "@/components/ui/data-table/components/data-table";
import { tsTasks } from "@/components/ui/data-table/data/tasks";

import { dashboardInfo } from "@/config";

import { CalendarDateRangePicker } from "./components/date-range-picker";

// import MailPage from "./requests/page";

const DynamicDataTable = dynamic(() => import("@/components/ui/data-table/components/data-table"), {
  loading: () => <Loading />,
});
// import { Search } from "./components/search";
// import TeamSwitcher from "./components/team-switcher";
// import { UserNav } from "./components/user-nav";

export default function DashboardPage() {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  // const tasks = await getTasks();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <>
      <div className="hidden w-full flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger
                onClick={() => {
                  router.push(pathName + "?" + createQueryString("tab", "overview"));
                }}
                value="overview">
                Overview
              </TabsTrigger>
              <TabsTrigger
                onClick={() => {
                  router.push(pathName + "?" + createQueryString("tab", "requests"));
                }}
                value="requests">
                Requests
              </TabsTrigger>
              <TabsTrigger
                onClick={() => {
                  router.push(pathName + "?" + createQueryString("tab", "applied"));
                }}
                value="applied">
                Applied
              </TabsTrigger>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="chart">Chart</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <div className="flex items-center justify-between space-y-2">
              <h6 className="font-bold tracking-tight">{dashboardInfo[searchParams.get("tab")]}</h6>
              <div className="flex items-center space-x-2">
                <CalendarDateRangePicker />
                <Button>Download</Button>
              </div>
            </div>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="text-muted-foreground h-4 w-4">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-muted-foreground text-xs">+20.1% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Referrals</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="text-muted-foreground h-4 w-4">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-muted-foreground text-xs">+180.1% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Sales</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="text-muted-foreground h-4 w-4">
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-muted-foreground text-xs">+19% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="text-muted-foreground h-4 w-4">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-muted-foreground text-xs">+201 since last hour</p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">Hi</CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Referral Request</CardTitle>
                    <CardDescription>You made 265 sales this month.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="requests" className="space-y-4">
              {/* <MailPage /> */}
            </TabsContent>
            <TabsContent value="applied" className="space-y-4">
              <DynamicDataTable columns={columns} data={tsTasks} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
