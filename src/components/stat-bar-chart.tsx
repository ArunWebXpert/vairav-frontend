import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { useBarChartData } from "@/api/hooks/logs-stat/use-bar-chart-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "./ui/button";

const chartConfig = {
  count: {
    label: "Total Events",
    color: "orange",
  },
} satisfies ChartConfig;

const StatBarChart = () => {
  const { data, isPending } = useBarChartData();

  if (isPending) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        Loading...
      </div>
    );
  }

  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardTitle>Bar Chart</CardTitle>
        <CardDescription>Daily</CardDescription>

        <div className="flex gap-2 justify-center items-center">
          <Button className="w-20 bg-blue-500 hover:bg-blue-700 cursor-pointer">
            Day
          </Button>
          <Button className="w-20 bg-blue-500 hover:bg-blue-700 cursor-pointer">
            Month
          </Button>
          <Button className="w-20 bg-blue-500 hover:bg-blue-700 cursor-pointer">
            Year
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[400px]">
          <BarChart
            defaultShowTooltip
            accessibilityLayer
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return value;
              }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="count" fill="var(--color-count)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default StatBarChart;
