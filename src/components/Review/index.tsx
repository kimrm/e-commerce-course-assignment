import { IReview } from "../../types/ProductTypes";
import ProductReviewStars from "../ProductReviewStars";

interface ReviewProps {
  review: IReview;
}

export default function index({ review }: ReviewProps) {
  return (
    <>
      <h3>{review.username}</h3>
      <p>{review.description}</p>
      <ProductReviewStars rating={review.rating} />
    </>
  );
}
