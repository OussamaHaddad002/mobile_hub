interface OrderItem {
  name: string;
  quantity: number;
  price: string;
}

export default function OrderDetails({ items }: { items: OrderItem[] }) {
  return (
    <div className="p-4 bg-muted/50 space-y-2">
      <h4 className="font-medium mb-2">Order Items:</h4>
      {items.map((item, index) => (
        <div key={index} className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-medium">{item.quantity}x</span>
            <span>{item.name}</span>
          </div>
          <span className="text-muted-foreground">{item.price}</span>
        </div>
      ))}
    </div>
  );
}