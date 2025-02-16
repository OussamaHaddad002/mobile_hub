import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data
const products = [
  {
    id: "1",
    name: "iPhone 13 Pro",
    price: 999,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "The latest iPhone with pro camera system",
    category: "Phones"
  },
  {
    id: "2",
    name: "Samsung Galaxy S21",
    price: 799,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description: "5G Android smartphone with amazing camera",
    category: "Phones"
  },
  {
    id: "3",
    name: "AirPods Pro",
    price: 249,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "Wireless earbuds with noise cancellation",
    category: "Accessories"
  },
  {
    id: "4",
    name: "Samsung Galaxy Watch 4",
    price: 249,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "Advanced smartwatch with health tracking",
    category: "Accessories"
  }
];

const categories = ["All", "Phones", "Accessories"];

export default function Shop() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Shop</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="w-full md:w-64">
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
        <Select
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        >
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}