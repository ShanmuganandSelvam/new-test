import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, DollarSign, ShoppingCart, Users, CreditCard } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  trend: number;
}

function StatsCard({ title, value, description, icon, trend }: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
        <div className={`flex items-center text-xs mt-1 ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {trend > 0 ? (
            <ArrowUpRight className="h-3 w-3 mr-1" />
          ) : (
            <ArrowDownRight className="h-3 w-3 mr-1" />
          )}
          <span>{Math.abs(trend)}% from previous period</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Revenue"
        value="$45,231.89"
        description="Monthly revenue"
        icon={<DollarSign className="h-4 w-4" />}
        trend={12.5}
      />
      <StatsCard
        title="Orders"
        value="2,345"
        description="Total monthly orders"
        icon={<ShoppingCart className="h-4 w-4" />}
        trend={-2.1}
      />
      <StatsCard
        title="Customers"
        value="12,234"
        description="Active customers"
        icon={<Users className="h-4 w-4" />}
        trend={5.7}
      />
      <StatsCard
        title="Avg. Order Value"
        value="$59.42"
        description="Per transaction"
        icon={<CreditCard className="h-4 w-4" />}
        trend={8.3}
      />
    </div>
  );
}
