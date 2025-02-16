import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";

// Mock data - replace with actual data later
const featuredProducts = [
  {
    id: "1",
    name: "iPhone 13 Pro",
    price: 999,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "The latest iPhone with pro camera system and A15 Bionic chip."
  },
  {
    id: "2",
    name: "Samsung Galaxy S21",
    price: 799,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description: "5G capable smartphone with advanced camera features."
  },
  {
    id: "3",
    name: "Google Pixel 6",
    price: 699,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "Pure Android experience with amazing computational photography."
  }
];

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
              Discover the Latest in Mobile Technology
            </h1>
            <p className="text-xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Find the perfect phone and accessories for your lifestyle.
            </p>
            <Link to="/shop">
              <Button
                size="lg"
                className="animate-fade-up bg-white text-primary hover:bg-gray-100"
                style={{ animationDelay: "0.4s" }}
              >
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Smartphones</h3>
              <p className="text-gray-600 mb-4">Latest models from top brands</p>
              <Link to="/shop?category=phones">
                <Button variant="outline">Browse Phones</Button>
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Accessories</h3>
              <p className="text-gray-600 mb-4">Cases, chargers, and more</p>
              <Link to="/shop?category=accessories">
                <Button variant="outline">Browse Accessories</Button>
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Wearables</h3>
              <p className="text-gray-600 mb-4">Smart watches and fitness trackers</p>
              <Link to="/shop?category=wearables">
                <Button variant="outline">Browse Wearables</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}