'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Completed', value: 65 },
  { name: 'Abandoned', value: 35 },
];

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-5))'];

export default function ConversionRate() {
  const chartConfig = {
    Completed: {
      label: 'Completed',
      theme: {
        light: COLORS[0],
        dark: COLORS[0],
      },
    },
    Abandoned: {
      label: 'Abandoned',
      theme: {
        light: COLORS[1],
        dark: COLORS[1],
      },
    },
  };

  return (
    <Card className="col-span-4 md:col-span-2">
      <CardHeader>
        <CardTitle>Cart Conversion Rate</CardTitle>
        <CardDescription>Checkout completion vs abandonment</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-square">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                innerRadius={50}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="flex items-center justify-center space-x-8 mt-4">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-1))] mr-1"></div>
            <span className="text-sm">Completed (65%)</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-5))] mr-1"></div>
            <span className="text-sm">Abandoned (35%)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
