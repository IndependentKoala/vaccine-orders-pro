import { Package, Calendar, TrendingUp, Clock } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { sampleOrders } from '@/data/orders';
import { format, addDays, isWithinInterval } from 'date-fns';

export default function Dashboard() {
  // For demo, show data for "client-1" (Green Valley Farms)
  const clientOrders = sampleOrders.filter(o => o.clientId === 'client-1');
  
  const openOrders = clientOrders.filter(o => !['delivered', 'cancelled'].includes(o.status));
  const upcomingDeliveries = clientOrders.filter(o => {
    const deliveryDates = o.items.map(i => new Date(i.requestedDeliveryDate));
    return deliveryDates.some(date => 
      isWithinInterval(date, { start: new Date(), end: addDays(new Date(), 30) })
    );
  });

  const totalSpent = clientOrders
    .filter(o => o.status === 'delivered')
    .reduce((sum, o) => sum + o.totalAmount, 0);

  return (
    <Layout>
      <div className="container-main py-8 lg:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">
            Dashboard
          </h1>
          <p className="text-muted-foreground">
            Welcome back, Green Valley Farms
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="animate-slide-up">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Open Orders</p>
                  <p className="font-heading text-3xl font-bold">{openOrders.length}</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-slide-up delay-100">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Upcoming Deliveries</p>
                  <p className="font-heading text-3xl font-bold">{upcomingDeliveries.length}</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-slide-up delay-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Orders</p>
                  <p className="font-heading text-3xl font-bold">{clientOrders.length}</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-slide-up delay-300">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Spent</p>
                  <p className="font-heading text-3xl font-bold">${totalSpent.toFixed(0)}</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-info/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-info" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Orders & Upcoming Deliveries */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Recent Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {clientOrders.slice(0, 4).map((order) => (
                  <div 
                    key={order.id} 
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary/50"
                  >
                    <div>
                      <p className="font-medium">{order.orderNumber}</p>
                      <p className="text-sm text-muted-foreground">
                        {format(new Date(order.createdAt), 'MMM d, yyyy')}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={order.status}>
                        {order.status}
                      </Badge>
                      <p className="font-semibold">${order.totalAmount.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Deliveries */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Deliveries (30 days)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingDeliveries.length > 0 ? (
                  upcomingDeliveries.map((order) => (
                    <div 
                      key={order.id} 
                      className="p-3 rounded-lg bg-secondary/50"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium">{order.orderNumber}</p>
                        <Badge variant={order.status}>{order.status}</Badge>
                      </div>
                      <div className="space-y-1">
                        {order.items.map((item, i) => (
                          <div key={i} className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">{item.productName}</span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3 text-muted-foreground" />
                              {format(new Date(item.requestedDeliveryDate), 'MMM d')}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-muted-foreground py-8">
                    No upcoming deliveries in the next 30 days
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
