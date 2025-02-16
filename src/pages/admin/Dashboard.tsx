import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Package2, ShoppingCart, DollarSign } from "lucide-react";

const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 2000 },
  { name: "Apr", sales: 2780 },
  { name: "May", sales: 1890 },
  { name: "Jun", sales: 2390 },
];

const recentOrders = [
  { id: "1", customer: "John Doe", status: "Processing", total: "$999" },
  { id: "2", customer: "Jane Smith", status: "Delivered", total: "$799" },
  { id: "3", customer: "Bob Johnson", status: "Shipped", total: "$699" },
];

const lowStockProducts = [
  { id: "1", name: "iPhone 13 Pro", stock: 5 },
  { id: "2", name: "Samsung Galaxy S21", stock: 3 },
  { id: "3", name: "Google Pixel 6", stock: 2 },
];

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Total Sales</h3>
              <p className="text-3xl font-bold">$15,890</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <ShoppingCart className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Orders</h3>
              <p className="text-3xl font-bold">234</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Package2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Products</h3>
              <p className="text-3xl font-bold">45</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Recent Orders Widget */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Recent Orders</h2>
            <Link to="/admin/orders">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">Order #{order.id}</p>
                  <p className="text-sm text-muted-foreground">{order.customer}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{order.total}</p>
                  <p className="text-sm text-muted-foreground">{order.status}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Low Stock Products Widget */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Low Stock Products</h2>
            <Link to="/admin/products">
              <Button variant="outline">Manage Products</Button>
            </Link>
          </div>
          <div className="space-y-4">
            {lowStockProducts.map((product) => (
              <div key={product.id} className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                <p className="font-medium">{product.name}</p>
                <p className="text-sm font-medium text-destructive">{product.stock} left in stock</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Sales Chart */}
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Sales Overview</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}