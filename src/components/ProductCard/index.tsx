import { Link } from "react-router-dom";
import { Product } from "../../types/ProductTypes";
import { Card, CardLink } from "./ProductCard.styles";
import AddToCart from "../AddToCart";

interface ProductCardProps {
  product: Product;
  handleAddToCart: (product: Product, quantity: number) => void;
}

export default function ProductCard(props: ProductCardProps) {
  const { product, handleAddToCart } = props;

  const handleItemAdded = (quantity: number) => {
    handleAddToCart(product, quantity);
  };

  return (
    <Card>
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
      <AddToCart itemAdded={handleItemAdded} />
    </Card>
  );
}
