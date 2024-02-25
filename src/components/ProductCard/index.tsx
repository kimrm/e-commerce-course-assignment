import { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../types/ProductTypes";
import { Card } from "./ProductCard.styles";
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";

interface ProductCardProps {
  product: Product;
  handleAddToCart: (product: Product) => void;
}

export default function ProductCard(props: ProductCardProps) {
  const { product, handleAddToCart } = props;
  const [isLightTheme, setIsLightTheme] = useState(true);
  const lightTheme = {
    backgroundColor: "#FFF", // Light background color
    textColor: "#333", // Light text color
  };

  const darkTheme = {
    backgroundColor: "#444", // Dark background color
    textColor: "#FFF", // Dark text color
  };

  useEffect(() => {
    setIsLightTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches ? false : true
    );
  }, []);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
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
    </ThemeProvider>
  );
}
