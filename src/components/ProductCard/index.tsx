import { Link } from "react-router-dom";
import { IProduct } from "../../types/ProductTypes";
import { Card, CardLink } from "./ProductCard.styles";
import AddToCart from "../AddToCart";
import { motion } from "framer-motion";
import useReviews from "../../hooks/useReviews";
import ProductsContext from "../../contexts/ProductsContext";
import { useContext } from "react";

interface IProductCardProps {
  product: IProduct;
  handleAddToCart: (product: IProduct, quantity: number) => void;
}

export default function ProductCard(props: IProductCardProps) {
  const { products } = useContext(ProductsContext);
  const { product, handleAddToCart } = props;
  const { averageRating } = useReviews(product.id, products);

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
        <img src={product.image.url} alt={product.image.alt} />
      </Link>
      <CardLink to={`/product/${product.id}`}>
        <h2>{product.title}</h2>
      </CardLink>
      <p>
        {product.price}{" "}
        {product.discountedPrice / product.price !== 1 && (
          <span className="discount">{product.discountedPrice}</span>
        )}
      </p>
      <p>{product.description}</p>
      <p>
        Rating: {isNaN(averageRating) ? "no ratings" : averageRating.toFixed(1)}
      </p>
      <AddToCart itemAdded={handleItemAdded} />
    </Card>
  );
}
