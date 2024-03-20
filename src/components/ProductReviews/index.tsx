import ProductReviewStars from "../ProductReviewStars";

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
    <>
      <h2>Reviews</h2>
      <p>
        This product has an average rating of:
        <ProductReviewStars rating={averageRating} />
      </p>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.username}</h3>
            <p>{review.description}</p>
            <p>Rating: {review.rating}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
