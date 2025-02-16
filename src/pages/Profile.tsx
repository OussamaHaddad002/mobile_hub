import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bookmark, Package, Star } from "lucide-react";
import ProfileInfo from "@/components/profile/ProfileInfo";
import OrdersList from "@/components/profile/OrdersList";
import { Card, CardContent } from "@/components/ui/card";

export default function Profile() {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://github.com/shadcn.png",
  });

  // Example data with detailed order information
  const orders = [
    {
      id: "ORD-001",
      date: "2024-02-15",
      status: "Delivered",
      total: "$2,497.97",
      items: [
        { name: "iPhone 15 Pro", quantity: 1, price: "$999.99" },
        { name: "AirPods Pro", quantity: 2, price: "$249.99 each" },
        { name: "MacBook Air Case", quantity: 1, price: "$49.99" },
        { name: "USB-C Cable Pack", quantity: 3, price: "$19.99 each" },
      ],
    },
    {
      id: "ORD-002",
      date: "2024-02-10",
      status: "Processing",
      total: "$599.99",
      items: [
        { name: "Samsung Galaxy S24", quantity: 1, price: "$599.99" },
      ],
    },
  ];

  const bookmarks = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: "$1,199.99",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      price: "$1,299.99",
      image: "/placeholder.svg",
    },
  ];

  const suggestions = [
    {
      id: 1,
      name: "Google Pixel 8",
      price: "$699.99",
      image: "/placeholder.svg",
      reason: "Based on your recent views",
    },
    {
      id: 2,
      name: "OnePlus 12",
      price: "$799.99",
      image: "/placeholder.svg",
      reason: "Popular in your area",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Profile Info */}
        <div className="w-full md:w-1/3">
          <ProfileInfo userInfo={userInfo} setUserInfo={setUserInfo} />
        </div>

        {/* Tabs Section */}
        <div className="w-full md:w-2/3">
          <Tabs defaultValue="orders">
            <TabsList className="w-full">
              <TabsTrigger value="orders" className="flex-1">
                <Package className="mr-2 h-4 w-4" />
                Orders
              </TabsTrigger>
              <TabsTrigger value="bookmarks" className="flex-1">
                <Bookmark className="mr-2 h-4 w-4" />
                Bookmarks
              </TabsTrigger>
              <TabsTrigger value="suggestions" className="flex-1">
                <Star className="mr-2 h-4 w-4" />
                Suggestions
              </TabsTrigger>
            </TabsList>

            <TabsContent value="orders">
              <OrdersList orders={orders} />
            </TabsContent>

            <TabsContent value="bookmarks">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Saved Items</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {bookmarks.map((item) => (
                        <div
                          key={item.id}
                          className="border rounded-lg p-4 hover:bg-accent transition-colors flex items-center space-x-4"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {item.price}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="suggestions">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Recommended for You</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {suggestions.map((item) => (
                        <div
                          key={item.id}
                          className="border rounded-lg p-4 hover:bg-accent transition-colors"
                        >
                          <div className="flex items-center space-x-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {item.price}
                              </p>
                              <p className="text-sm text-primary">
                                {item.reason}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}