import "./App.css";
import Layout from "./components/Layout";
import { useState, useEffect } from "react";

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

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchData().then((data: ProductsData) => {
      setProducts(data.data || []);
    });
  }, []);

  return (
    <Layout>
      <main>
        <section>
          <h1>Products</h1>
          {products.map((product: Product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <img src={product.image.url} alt={product.image.alt} />
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}

export default App;
