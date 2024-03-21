export interface IProduct {
  id: string;
  title: string;
  price: number;
  discountedPrice: number;
  isDiscounted?: boolean;
  description: string;
  rating: number;
  tags: string[];
  image: IProductImage;
  reviews: IProductReview[];
}

interface IProductImage {
  url: string;
  alt: string;
}

interface IProductReview {
  id: string;
  username: string;
  rating: number;
  description: string;
}

export interface IReview {
  id: string;
  username: string;
  rating: number;
  description: string;
}
