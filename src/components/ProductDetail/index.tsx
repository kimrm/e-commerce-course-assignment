import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { FlexContainer } from "./index.styles";
import { ProductsContext } from "../../contexts/ProductsContext";
import { useStore } from "../../store/store";
import { IShoppingBagItem } from "../../types/ShoppingBagTypes";
import { IProduct } from "../../types/ProductTypes";
import usePageTitle from "../../hooks/usePageTitle";
import useReviews from "../../hooks/useReviews";
import Image from "../Image";
import AddToCart from "../AddToCart";

export default function ProductDetail() {
  const { productId } = useParams<string>();
  const [product, setProduct] = useState<IProduct | null>(null);
  const addItemToBag = useStore((state) => state.addItemToBag);

  usePageTitle(product?.title + " | Shop-a-lot");
  const productsContext = useContext(ProductsContext);
  const { products } = productsContext || {};
  const { reviews, averageRating } = useReviews(
    productId ?? "",
    products ?? []
  );

  useEffect(() => {
    fetchData(productId ?? "").then((data) => {
      setProduct(data);
    });
  }, [productId]);

  function handleAddToCart(quantity: number = 1) {
    const item: IShoppingBagItem = {
      id: product?.id ?? "",
      name: product?.title ?? "",
      price: product?.price ?? 0,
      quantity: quantity,
      productImage: product?.image?.url,
    };
    if (product) {
      addItemToBag(item);
    }
  }
  return (
    <div>
      Products -{" "}
      {product?.tags.map((tag) => (
        <span> {tag} </span>
      ))}
      <FlexContainer>
        <div>
          <h1>{product?.title}</h1>
          <p>{product?.description}</p>
          <p>{product?.price}</p>
          <p>
            Price NOW!{" "}
            {product?.discountedPrice !== product?.price &&
              product?.discountedPrice}
          </p>
          <AddToCart itemAdded={handleAddToCart} />
          <h2>Reviews</h2>
          <p>
            This product has an average rating of: {averageRating.toFixed(1)}
          </p>
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

        {product && (
          <Image
            src={product?.image.url}
            alt={product?.image.alt}
            width="100%"
          />
        )}
      </FlexContainer>
    </div>
  );
}

async function fetchData(id: string): Promise<IProduct> {
  const data = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
  const response = await data.json();
  return response.data;
}
