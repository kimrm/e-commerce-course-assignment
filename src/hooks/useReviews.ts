import { useEffect, useState } from "react";
import { IProduct, IReview } from "../types/ProductTypes";

export default function useReviews(productId: string, products: IProduct[]) {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [averageRating, setAverageRating] = useState<number>(0);

  useEffect(() => {
    const product = products.find((product) => product.id === productId);
    if (product) {
      setReviews(product.reviews);
      const totalRating = product.reviews.reduce(
        (total, review) => total + review.rating,
        0
      );
      setAverageRating(totalRating / product.reviews.length);
    }
  }, [products, productId]);

  return { reviews, averageRating };
}
