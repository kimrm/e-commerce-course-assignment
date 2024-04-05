import { Link } from "react-router-dom";
import { IProduct } from "../../types/ProductTypes";
import {
  Card,
  CardLink,
  NoReviews,
  Description,
  Reviews,
} from "./ProductCard.styles";
import AddToCart from "../AddToCart";
import { motion } from "framer-motion";
import useReviews from "../../hooks/useReviews";
import { ProductsContext } from "../../contexts/ProductsContext";
import { useContext } from "react";
import Image from "../Image";
import ProductReviewStars from "../ProductReviewStars";
import PriceTag from "../PriceTag";

interface IProductCardProps {
  product: IProduct;
  handleAddToCart: (product: IProduct, quantity: number) => void;
}

export default function ProductCard(props: IProductCardProps) {
  const { products } = useContext(ProductsContext) || {};
  const { product, handleAddToCart } = props;
  const { averageRating } = useReviews(product.id, products || []);

  const handleItemAdded = (quantity: number) => {
    handleAddToCart(product, quantity);
  };

  return (
    <Card
      as={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Link to={`/product/${product.id}`}>
        <Image src={product.image.url} alt={product.title} />
      </Link>
      <CardLink to={`/product/${product.id}`}>
        <h2>{product.title}</h2>
      </CardLink>
      <PriceTag price={product.price} discount={product.discountedPrice} />
      <Description>
        <p aria-label={product.description}>
          {product.description.slice(0, 40)}...
        </p>
        <Link
          to={`/product/${product.id}`}
          aria-label={`View product details for ${product.title}`}
        >
          View product details
        </Link>
      </Description>
      <Reviews>
        {product.reviews.length > 0 ? (
          <ProductReviewStars rating={averageRating} />
        ) : (
          <NoReviews>No reviews yet</NoReviews>
        )}
      </Reviews>
      <AddToCart itemAdded={handleItemAdded} />
    </Card>
  );
}
