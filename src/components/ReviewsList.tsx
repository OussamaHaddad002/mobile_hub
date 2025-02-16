import { StarRating } from "./StarRating";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewsListProps {
  reviews: Review[];
}

export function ReviewsList({ reviews }: ReviewsListProps) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-accent/20 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">{review.name}</span>
              <div className="flex items-center gap-2">
                <StarRating rating={review.rating} readonly />
                <span className="text-gray-500 text-sm">{review.date}</span>
              </div>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}