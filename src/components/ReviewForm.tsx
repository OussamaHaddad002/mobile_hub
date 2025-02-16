import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { StarRating } from "./StarRating";
import { toast } from "sonner";

type ReviewFormData = {
  rating: number;
  comment: string;
};

interface ReviewFormProps {
  onSubmitReview: (data: ReviewFormData) => void;
}

export function ReviewForm({ onSubmitReview }: ReviewFormProps) {
  const form = useForm<ReviewFormData>({
    defaultValues: {
      rating: 5,
      comment: ""
    }
  });

  const handleSubmit = (data: ReviewFormData) => {
    onSubmitReview(data);
    form.reset();
    toast.success("Review submitted successfully!");
  };

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Write a Review</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rating</FormLabel>
                <FormControl>
                  <StarRating rating={field.value} onRatingChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Review</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Write your review here..." 
                    className="min-h-[100px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit Review</Button>
        </form>
      </Form>
    </div>
  );
}