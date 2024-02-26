import { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../types/ProductTypes";
import { Card, CardLink } from "./ProductCard.styles";

interface ProductCardProps {
  product: Product;
  handleAddToCart: (product: Product) => void;
}

export default function ProductCard(props: ProductCardProps) {
  const { product, handleAddToCart } = props;
  const [quantity, setQuantity] = useState("1");

  return (
    <Card>
      <CardLink to={`/product/${product.id}`}>
        <h2>{product.title}</h2>
      </CardLink>
      <Link to={`/product/${product.id}`}>
        <img src={product.image.url} alt={product.image.alt} />
      </Link>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <input
        type="number"
        placeholder="1"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button
        onClick={() => {
          handleAddToCart(product);
        }}
      >
        Add to cart
      </button>
    </Card>
  );
}
