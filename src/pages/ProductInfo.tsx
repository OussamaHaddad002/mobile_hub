import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import ProductCard from "@/components/ProductCard";
import { ReviewForm } from "@/components/ReviewForm";
import { ReviewsList } from "@/components/ReviewsList";
import { useState } from "react";

// Mock data - replace with actual data later
const products = {
  "1": {
    id: "1",
    name: "iPhone 13 Pro",
    price: 999,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "The latest iPhone with pro camera system and A15 Bionic chip.",
    category: "Phones",
    specs: {
      screen: "6.1-inch Super Retina XDR display",
      camera: "Pro camera system with 12MP cameras",
      processor: "A15 Bionic chip",
      battery: "Up to 22 hours video playback"
    },
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 5,
        comment: "Amazing phone! The camera quality is outstanding.",
        date: "2024-02-15"
      },
      {
        id: 2,
        name: "Jane Smith",
        rating: 4,
        comment: "Great device overall, but battery life could be better.",
        date: "2024-02-10"
      }
    ]
  },
};

// Mock related products
const relatedProducts = [
  {
    id: "2",
    name: "Samsung Galaxy S21",
    price: 799,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description: "5G Android smartphone with amazing camera"
  },
  {
    id: "3",
    name: "Google Pixel 6",
    price: 699,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "Experience the best of Android"
  }
];

export default function ProductInfo() {
  const { id } = useParams();
  const product = products[id as keyof typeof products];
  const [reviews, setReviews] = useState(product?.reviews || []);

  const addToCart = () => {
    toast.success("Added to cart!");
  };

  const onSubmitReview = (data: { rating: number; comment: string }) => {
    const newReview = {
      id: reviews.length + 1,
      name: "Current User", // This would come from auth context in a real app
      ...data,
      date: new Date().toISOString().split('T')[0]
    };
    setReviews([...reviews, newReview]);
  };

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-md" />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-primary mb-4">TND {product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Specifications</h2>
            <ul className="space-y-2">
              {Object.entries(product.specs).map(([key, value]) => (
                <li key={key} className="flex">
                  <span className="font-semibold w-24">{key}:</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
          <Button onClick={addToCart} size="lg">Add to Cart</Button>
        </div>
      </div>

      <ReviewsList reviews={reviews} />
      <ReviewForm onSubmitReview={onSubmitReview} />

      <div>
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
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
    </div>
  );
}
