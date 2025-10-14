import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Order {
  id: string;
  customer: {
    name: string;
    email: string;
    avatar?: string;
  };
  amount: number;
  status: 'completed' | 'processing' | 'failed';
  date: string;
}

const orders: Order[] = [
  {
    id: 'ORD-7652',
    customer: {
      name: 'Alex Johnson',
      email: 'alex@example.com',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    amount: 125.99,
    status: 'completed',
    date: '2 minutes ago'
  },
  {
    id: 'ORD-7651',
    customer: {
      name: 'Sarah Williams',
      email: 'sarah@example.com',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    amount: 89.50,
    status: 'processing',
    date: '15 minutes ago'
  },
  {
    id: 'ORD-7650',
    customer: {
      name: 'Michael Brown',
      email: 'michael@example.com'
    },
    amount: 245.75,
    status: 'completed',
    date: '42 minutes ago'
  },
  {
    id: 'ORD-7649',
    customer: {
      name: 'Emily Davis',
      email: 'emily@example.com',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    amount: 34.99,
    status: 'failed',
    date: '1 hour ago'
  },
  {
    id: 'ORD-7648',
    customer: {
      name: 'David Wilson',
      email: 'david@example.com'
    },
    amount: 112.25,
    status: 'completed',
    date: '2 hours ago'
  }
];

export default function RecentOrders() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
        <CardDescription>Latest customer orders</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={order.customer.avatar} />
                  <AvatarFallback>{order.customer.name.charAt(0)}{order.customer.name.split(' ')[1]?.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{order.customer.name}</p>
                  <p className="text-xs text-muted-foreground">{order.customer.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium">${order.amount.toFixed(2)}</p>
                  <p className="text-xs text-muted-foreground">{order.id}</p>
                </div>
                <Badge variant={
                  order.status === 'completed' ? 'default' : 
                  order.status === 'processing' ? 'outline' : 'destructive'
                }>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </Badge>
                <div className="text-xs text-muted-foreground whitespace-nowrap">
                  {order.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
