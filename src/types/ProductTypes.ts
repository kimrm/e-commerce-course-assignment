export interface Product {
  id: string;
  title: string;
  price: number;
  discountedPrice: number;
  description: string;
  rating: number;
  tags: string[];
  image: ProductImage;
  reviews: ProductReview[];
}

interface ProductImage {
  url: string;
  alt: string;
}

interface ProductReview {
  id: string;
  username: string;
  rating: number;
  description: string;
}
