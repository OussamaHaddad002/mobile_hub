import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

// Mock data - replace with actual data later
const cartItems = [
  {
    id: "1",
    name: "iPhone 13 Pro",
    price: 999,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  }
];

export default function Cart() {
  const checkout = () => {
    toast.success("Order placed successfully!");
  };

  const removeFromCart = (itemId: string) => {
    // TODO: Implement remove functionality
    toast.success("Item removed from cart!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md mb-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">-</Button>
                  <span>{item.quantity}</span>
                  <Button variant="outline" size="sm">+</Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>TND {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                <span>Total</span>
                <span>TND {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
              </div>
            </div>
            <Button className="w-full" onClick={checkout}>Checkout</Button>
          </div>
        </div>
      )}
    </div>
  );
}