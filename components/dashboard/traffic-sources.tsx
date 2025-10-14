'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Direct', value: 30 },
  { name: 'Organic Search', value: 25 },
  { name: 'Social Media', value: 20 },
  { name: 'Referral', value: 15 },
  { name: 'Email', value: 10 },
];

const COLORS = [
  'hsl(var(--chart-1))', 
  'hsl(var(--chart-2))', 
  'hsl(var(--chart-3))', 
  'hsl(var(--chart-4))', 
  'hsl(var(--chart-5))'
];

export default function TrafficSources() {
  const chartConfig = {
    Direct: {
      label: 'Direct',
      theme: {
        light: COLORS[0],
        dark: COLORS[0],
      },
    },
    'Organic Search': {
      label: 'Organic Search',
      theme: {
        light: COLORS[1],
        dark: COLORS[1],
      },
    },
    'Social Media': {
      label: 'Social Media',
      theme: {
        light: COLORS[2],
        dark: COLORS[2],
      },
    },
    Referral: {
      label: 'Referral',
      theme: {
        light: COLORS[3],
        dark: COLORS[3],
      },
    },
    Email: {
      label: 'Email',
      theme: {
        light: COLORS[4],
        dark: COLORS[4],
      },
    },
  };

  return (
    <Card className="col-span-4 md:col-span-2">
      <CardHeader>
        <CardTitle>Traffic Sources</CardTitle>
        <CardDescription>Where your customers come from</CardDescription>
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
        <div className="grid grid-cols-2 gap-2 mt-4">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center">
              <div className="h-3 w-3 rounded-full mr-1" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
              <span className="text-sm">{item.name} ({item.value}%)</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
