"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function BarChartComponent({
  chartData,
}: {
  chartData: {
    month: string;
    desktop: number;
    mobile: number;
  }[];
}) {
  return (
    // <Card>
    //   <CardHeader>
    //     <CardTitle>Bar Chart - Multiple</CardTitle>
    //     <CardDescription>January - June 2024</CardDescription>
    //   </CardHeader>
    //   <CardContent>
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
    //   </CardContent>
    // <CardFooter className="flex-col items-start gap-2 text-sm">
    //   <div className="flex gap-2 font-medium leading-none">
    //     Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
    //   </div>
    //   <div className="text-muted-foreground leading-none">Showing total visitors for the last 6 months</div>
    // </CardFooter>
    // </Card>
  );
}
