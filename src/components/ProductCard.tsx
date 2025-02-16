import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export default function ProductCard({ id, name, price, image, description }: ProductCardProps) {
  const addToCart = () => {
    // TODO: Implement cart functionality
    toast.success("Added to cart!");
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 animate-fade-up">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="text-lg font-semibold text-secondary mb-2">{name}</h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-primary font-bold">TND {price}</span>
          <Button onClick={addToCart} variant="default" size="sm">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}