import DashboardHeader from '@/components/dashboard/header';
import StatsCards from '@/components/dashboard/stats-cards';
import RevenueChart from '@/components/dashboard/revenue-chart';
import TopProducts from '@/components/dashboard/top-products';
import CustomerActivity from '@/components/dashboard/customer-activity';
import RecentOrders from '@/components/dashboard/recent-orders';
import ConversionRate from '@/components/dashboard/conversion-rate';
import TrafficSources from '@/components/dashboard/traffic-sources';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <DashboardHeader />
        <div className="space-y-4">
          <StatsCards />
          <div className="grid gap-4 grid-cols-4">
            <RevenueChart />
          </div>
          <div className="grid gap-4 grid-cols-4">
            <TopProducts />
            <CustomerActivity />
          </div>
          <div className="grid gap-4 grid-cols-4">
            <ConversionRate />
            <TrafficSources />
          </div>
          <div className="grid gap-4 grid-cols-4">
            <RecentOrders />
          </div>
        </div>
      </div>
    </div>
  );
}
