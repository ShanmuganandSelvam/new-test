'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const data = [
  { name: '18-24', users: 400, newUsers: 240 },
  { name: '25-34', users: 580, newUsers: 380 },
  { name: '35-44', users: 690, newUsers: 390 },
  { name: '45-54', users: 490, newUsers: 280 },
  { name: '55-64', users: 350, newUsers: 190 },
  { name: '65+', users: 240, newUsers: 140 },
];

const locationData = [
  { name: 'USA', users: 1200, newUsers: 780 },
  { name: 'UK', users: 890, newUsers: 540 },
  { name: 'Canada', users: 750, newUsers: 420 },
  { name: 'Australia', users: 680, newUsers: 350 },
  { name: 'Germany', users: 620, newUsers: 310 },
  { name: 'France', users: 540, newUsers: 270 },
];

const deviceData = [
  { name: 'Desktop', users: 1800, newUsers: 980 },
  { name: 'Mobile', users: 2400, newUsers: 1540 },
  { name: 'Tablet', users: 580, newUsers: 320 },
];

export default function CustomerActivity() {
  const [view, setView] = useState('age');
  
  const chartConfig = {
    users: {
      label: 'Total Users',
      theme: {
        light: 'hsl(var(--chart-3))',
        dark: 'hsl(var(--chart-3))',
      },
    },
    newUsers: {
      label: 'New Users',
      theme: {
        light: 'hsl(var(--chart-4))',
        dark: 'hsl(var(--chart-4))',
      },
    },
  };

  const getViewData = () => {
    switch (view) {
      case 'age':
        return data;
      case 'location':
        return locationData;
      case 'device':
        return deviceData;
      default:
        return data;
    }
  };

  return (
    <Card className="col-span-4 lg:col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Customer Demographics</CardTitle>
            <CardDescription>User distribution and acquisition</CardDescription>
          </div>
          <Select value={view} onValueChange={setView}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select view" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="age">By Age</SelectItem>
              <SelectItem value="location">By Location</SelectItem>
              <SelectItem value="device">By Device</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-[4/3]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={getViewData()}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="users" name="users" fill="var(--color-users)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="newUsers" name="newUsers" fill="var(--color-newUsers)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-3))] mr-1"></div>
              <span className="text-sm text-muted-foreground">Total Users</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-4))] mr-1"></div>
              <span className="text-sm text-muted-foreground">New Users</span>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            Total Customers: <span className="font-medium text-foreground">12,234</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
