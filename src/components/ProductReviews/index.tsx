import ProductReviewStars from "../ProductReviewStars";
import { ReviewsContainer } from "./index.styles";
import Review from "../Review";

interface ProductReviewsProps {
  reviews: {
    id: string;
    username: string;
    description: string;
    rating: number;
  }[];
  averageRating: number;
}

export default function ProductReviews({
  reviews,
  averageRating,
}: ProductReviewsProps) {
  return (
    <ReviewsContainer>
      <h2>Average rating for this product:</h2>
      <p>
        <ProductReviewStars rating={averageRating} />
      </p>
      <h2>Customer reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </ReviewsContainer>
  );
}
