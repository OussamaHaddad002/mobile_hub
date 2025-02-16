import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import OrderDetails from "./OrderDetails";
import { useState } from "react";

interface OrderItem {
  name: string;
  quantity: number;
  price: string;
}

interface Order {
  id: string;
  customer: string;
  date: string;
  total: string;
  status: string;
  items: OrderItem[];
}

export default function OrdersTable() {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  const orders: Order[] = [
    {
      id: "#1",
      customer: "John Doe",
      date: "2024-02-20",
      total: "TND 2,497.97",
      status: "Processing",
      items: [
        { name: "iPhone 15 Pro", quantity: 1, price: "TND 999.99" },
        { name: "AirPods Pro", quantity: 2, price: "TND 249.99" },
        { name: "MacBook Air Case", quantity: 1, price: "TND 49.99" },
        { name: "USB-C Cable Pack", quantity: 3, price: "TND 19.99" },
      ],
    },
    {
      id: "#2",
      customer: "Jane Smith",
      date: "2024-02-19",
      total: "TND 799",
      status: "Shipped",
      items: [
        { name: "Samsung Galaxy S24", quantity: 1, price: "TND 799" },
      ],
    },
    {
      id: "#3",
      customer: "Bob Johnson",
      date: "2024-02-18",
      total: "TND 699",
      status: "Delivered",
      items: [
        { name: "Google Pixel 8", quantity: 1, price: "TND 699" },
      ],
    },
  ];

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <>
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedOrder(expandedOrder === order.id ? null : order.id)}
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform ${
                      expandedOrder === order.id ? "rotate-180" : ""
                    }`} />
                  </Button>
                </TableCell>
              </TableRow>
              {expandedOrder === order.id && (
                <TableRow>
                  <TableCell colSpan={6}>
                    <OrderDetails items={order.items} />
                  </TableCell>
                </TableRow>
              )}
            </>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}