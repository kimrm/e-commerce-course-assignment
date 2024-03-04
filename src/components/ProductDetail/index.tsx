import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import usePageTitle from "../../hooks/usePageTitle";
import { IProduct } from "../../types/ProductTypes";
import useReviews from "../../hooks/useReviews";
import ProductsContext from "../../contexts/ProductsContext";
import { useContext } from "react";

function useImage(imageUrl: string) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setIsLoaded(true);
      setIsError(false);
    };
    img.onerror = () => {
      setIsError(true);
    };
  }, [imageUrl]);

  return { isLoaded, isError };
}

export default function ProductDetail() {
  const { productId } = useParams<string>();
  const [product, setProduct] = useState<IProduct | null>(null);
  const { isLoaded, isError } = useImage(product?.image.url ?? "");
  usePageTitle(product?.title + " | Shop-a-lot");
  const productsContext = useContext(ProductsContext);
  const { products } = productsContext || {};
  const { reviews } = useReviews(productId ?? "", products ?? []);

  useEffect(() => {
    fetchData(productId ?? "").then((data) => {
      setProduct(data);
    });
  }, [productId]);

  return (
    <div>
      <h1>{product?.title}</h1>
      <p>{product?.description}</p>
      <p>{product?.price}</p>
      {isLoaded ? (
        <img src={product?.image.url} alt={product?.image.alt} />
      ) : (
        <div>Loading image</div>
      )}
      {isError && <div>Image failed to load</div>}
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.username}</h3>
            <p>{review.description}</p>
            <p>Rating: {review.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

async function fetchData(id: string): Promise<IProduct> {
  const data = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
  const response = await data.json();
  return response.data;
}
