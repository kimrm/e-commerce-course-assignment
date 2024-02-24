import { Link } from "react-router-dom";
import { Product } from "../../types/ProductTypes";

interface ProductCardProps {
  product: Product;
  handleAddToCart: (product: Product) => void;
}

export default function ProductCard(props: ProductCardProps) {
  const { product, handleAddToCart } = props;

  return (
    <div>
      <Link to={`/product/${product.id}`}>
        <h2>{product.title}</h2>
      </Link>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <img src={product.image.url} alt={product.image.alt} />
      <button
        onClick={() => {
          handleAddToCart(product);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
