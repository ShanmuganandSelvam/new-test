'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const data = [
  { name: 'Jan', revenue: 4000, profit: 2400 },
  { name: 'Feb', revenue: 3000, profit: 1398 },
  { name: 'Mar', revenue: 2000, profit: 9800 },
  { name: 'Apr', revenue: 2780, profit: 3908 },
  { name: 'May', revenue: 1890, profit: 4800 },
  { name: 'Jun', revenue: 2390, profit: 3800 },
  { name: 'Jul', revenue: 3490, profit: 4300 },
  { name: 'Aug', revenue: 4000, profit: 2400 },
  { name: 'Sep', revenue: 3000, profit: 1398 },
  { name: 'Oct', revenue: 2000, profit: 9800 },
  { name: 'Nov', revenue: 2780, profit: 3908 },
  { name: 'Dec', revenue: 3890, profit: 4800 },
];

const weeklyData = [
  { name: 'Mon', revenue: 900, profit: 400 },
  { name: 'Tue', revenue: 1200, profit: 700 },
  { name: 'Wed', revenue: 1500, profit: 800 },
  { name: 'Thu', revenue: 1800, profit: 1000 },
  { name: 'Fri', revenue: 2100, profit: 1200 },
  { name: 'Sat', revenue: 1700, profit: 900 },
  { name: 'Sun', revenue: 1100, profit: 600 },
];

const formatCurrency = (value: number) => {
  return `$${value.toLocaleString()}`;
};

export default function RevenueChart() {
  const chartConfig = {
    revenue: {
      label: 'Revenue',
      theme: {
        light: 'hsl(var(--chart-1))',
        dark: 'hsl(var(--chart-1))',
      },
    },
    profit: {
      label: 'Profit',
      theme: {
        light: 'hsl(var(--chart-2))',
        dark: 'hsl(var(--chart-2))',
      },
    },
  };

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Revenue & Profit</CardTitle>
        <CardDescription>
          Monthly revenue and profit overview
        </CardDescription>
        <Tabs defaultValue="monthly" className="w-full">
          <TabsList className="grid w-[400px] grid-cols-3">
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
          <TabsContent value="weekly">
            <ChartContainer config={chartConfig} className="aspect-[4/2]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={weeklyData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={formatCurrency} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    name="revenue"
                    stroke="var(--color-revenue)"
                    fill="var(--color-revenue)"
                    fillOpacity={0.2}
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="profit"
                    name="profit"
                    stroke="var(--color-profit)"
                    fill="var(--color-profit)"
                    fillOpacity={0.2}
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </TabsContent>
          <TabsContent value="monthly">
            <ChartContainer config={chartConfig} className="aspect-[4/2]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={formatCurrency} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    name="revenue"
                    stroke="var(--color-revenue)"
                    fill="var(--color-revenue)"
                    fillOpacity={0.2}
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="profit"
                    name="profit"
                    stroke="var(--color-profit)"
                    fill="var(--color-profit)"
                    fillOpacity={0.2}
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </TabsContent>
          <TabsContent value="yearly">
            <div className="flex items-center justify-center h-[300px] text-muted-foreground">
              Yearly data not available
            </div>
          </TabsContent>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-1))] mr-1"></div>
              <span className="text-sm text-muted-foreground">Revenue</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-2))] mr-1"></div>
              <span className="text-sm text-muted-foreground">Profit</span>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            Total Revenue: <span className="font-medium text-foreground">$45,231.89</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
