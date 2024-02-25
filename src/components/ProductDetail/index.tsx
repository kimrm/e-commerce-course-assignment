import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import usePageTitle from "../../hooks/usePageTitle";
import { Product } from "../../types/ProductTypes";

function useImage(imageUrl: string) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setIsLoaded(true);
    };
    img.onerror = () => {
      setIsError(true);
    };
  }, [imageUrl]);

  return { isLoaded, isError };
}

export default function ProductDetail() {
  const { productId } = useParams<string>();
  const [product, setProduct] = useState<Product | null>(null);
  const { isLoaded, isError } = useImage(product?.image.url ?? "");
  usePageTitle(product?.title + " | Shop-a-lot");

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
    </div>
  );
}

async function fetchData(id: string): Promise<Product> {
  const data = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
  const response = await data.json();
  return response.data;
}
