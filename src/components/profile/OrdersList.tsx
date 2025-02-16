import { Card, CardContent } from "@/components/ui/card";

interface Order {
  id: string;
  date: string;
  status: string;
  total: string;
  items: {
    name: string;
    quantity: number;
    price: string;
  }[];
}

interface OrdersListProps {
  orders: Order[];
}

export default function OrdersList({ orders }: OrdersListProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Recent Orders</h3>
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="border rounded-lg p-4 hover:bg-accent transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.date}</p>
                    <div className="mt-2 space-y-1">
                      {order.items.map((item, index) => (
                        <p key={index} className="text-sm">
                          {item.quantity}x {item.name} - {item.price}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{order.total}</p>
                    <p
                      className={`text-sm ${
                        order.status === "Delivered"
                          ? "text-green-600"
                          : "text-blue-600"
                      }`}
                    >
                      {order.status}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}