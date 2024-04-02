import ProductsIndex from "../../components/ProductsIndex";
import { useParams } from "react-router-dom";

export default function HomePage() {
  const { tag } = useParams();

  return (
    <>
      <section>
        <h1>Browse our catalogue of amazing products</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro fugit
          cupiditate ipsa esse qui placeat, beatae fuga asperiores sapiente,
          quas illo nesciunt, nam consequuntur molestias dolore blanditiis
          aliquam. Optio, molestias!
        </p>
      </section>
      <section>
        <ProductsIndex tag={tag} />
      </section>
    </>
  );
}
