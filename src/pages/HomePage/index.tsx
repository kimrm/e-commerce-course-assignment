import ProductsIndex from "../../components/ProductsIndex";

export default function HomePage() {
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
        <ProductsIndex />
      </section>
    </>
  );
}
