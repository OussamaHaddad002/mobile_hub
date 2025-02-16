import OrdersTable from "@/components/admin/OrdersTable";

export default function Orders() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Orders</h1>
      <OrdersTable />
    </div>
  );
}