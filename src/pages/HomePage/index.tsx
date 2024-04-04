import ProductsIndex from "../../components/ProductsIndex";
import { useParams } from "react-router-dom";

export default function HomePage() {
  const { tag } = useParams();

  return (
    <>
      <section>
        <h2>Welcome to Shop-a-lot</h2>
        <h1>Your one-stop shop for all things amazing</h1>
        <p>
          Browse our catalogue of amazing products. We have everything you need
          from hair dryers and headphones to perfume.
        </p>
      </section>
      <section>
        <ProductsIndex tag={tag} />
      </section>
    </>
  );
}
