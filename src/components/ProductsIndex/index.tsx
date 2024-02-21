import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface ProductsData {
  data: Product[];
}

interface Product {
  id: number;
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

async function fetchData() {
  const data = await fetch("https://v2.api.noroff.dev/online-shop");
  const response = await data.json();
  return response;
}

export default function ProductsIndex() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchData().then((data: ProductsData) => {
      setProducts(data.data || []);
    });
  }, []);
  return (
    <>
      {products.map((product: Product) => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>
            <h2>{product.title}</h2>
          </Link>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <img src={product.image.url} alt={product.image.alt} />
        </div>
      ))}
    </>
  );
}
