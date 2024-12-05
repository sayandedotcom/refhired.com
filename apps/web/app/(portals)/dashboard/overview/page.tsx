"use client";

import { useQuery } from "@tanstack/react-query";
import { DollarSign, Star, TrendingUp, User } from "lucide-react";

import {
  BarChartComponent,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@referrer/ui";

import { RecentSales } from "@/components/dashboard/components/recent-sales";
import NumberTicker from "@/components/ui/number-ticker";

import { request } from "@/lib/axios";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
function OverviewDashboard() {
  const { data, error, isStale, isLoading, isFetching } = useQuery({
    queryKey: ["dashboard", "overview"],
    queryFn: () => {
      return request.get("/dashboard/overview");
    },
    // refetchInterval: 5000,
    // staleTime: 200000,
    // gcTime: Infinity,
  });

  console.log(data);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stars Earned</CardTitle>
            <Star className="text-muted-foreground" />
          </CardHeader>
          <CardContent>
            +<NumberTicker className="text-2xl font-bold" value={data?.data?.data?.starsEarned ?? 0} />
            {/* <div className="text-2xl font-bold">+</div> */}
            <p className="text-muted-foreground text-xs">( Stars only from referrals request )</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="text-muted-foreground" />
          </CardHeader>
          <CardContent>
            $
            <NumberTicker
              className="text-2xl font-bold"
              value={data?.data?.data?.starsEarned * 10 * 0.75 || 0}
            />
            {/* <div className="text-2xl font-bold">${data?.data?.data?.starsEarned * 10 * 0.75}</div> */}
            <p className="text-muted-foreground text-xs">( Revenue after commission )</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Referrals Request</CardTitle>
            <User className="text-muted-foreground" />
          </CardHeader>
          <CardContent>
            +
            <NumberTicker
              className="text-2xl font-bold"
              value={data?.data?.data?.unreadApplicationsCount ?? 0}
            />
            {/* <div className="text-2xl font-bold">+{data?.data?.data?.unreadApplicationsCount}</div> */}
            <p className="text-muted-foreground text-xs">( Unread referral requests )</p>
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
      </div>
      <div className="mt-1 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Conversion Rate</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent className="">
            <BarChartComponent chartData={chartData} />
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 p-3 text-sm">
            <div className="flex gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground leading-none">
              Showing total visitors for the last 6 months
            </div>
          </CardFooter>
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
    </>
  );
}

export default OverviewDashboard;
