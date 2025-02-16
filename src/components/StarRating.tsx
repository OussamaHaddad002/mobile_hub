import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
}

export function StarRating({ rating, onRatingChange, readonly = false }: StarRatingProps) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type={readonly ? "button" : "button"}
          className={cn(
            "focus:outline-none",
            readonly && "cursor-default"
          )}
          onClick={() => !readonly && onRatingChange?.(star)}
        >
          <Star
            className={cn(
              "w-5 h-5",
              star <= rating ? "fill-primary text-primary" : "fill-none text-muted-foreground"
            )}
          />
        </button>
      ))}
    </div>
  );
}