import { Link } from "react-router-dom";
import { Product } from "../../types/ProductTypes";
import { Card } from "./ProductCard.styles";

interface ProductCardProps {
  product: Product;
  handleAddToCart: (product: Product) => void;
}

export default function ProductCard(props: ProductCardProps) {
  const { product, handleAddToCart } = props;

  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <h2>{product.title}</h2>
      </Link>
      <img src={product.image.url} alt={product.image.alt} />
      <p>{product.price}</p>
      <p>{product.description}</p>
      <input type="number" placeholder="1" value={1} />
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
