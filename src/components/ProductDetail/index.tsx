import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import {
  GridContainer,
  ReviewsContainer,
  ProductDetailContainer,
  ProductTags,
} from "./index.styles";
import { ProductsContext } from "../../contexts/ProductsContext";
import { useStore } from "../../store/store";
import { IShoppingBagItem } from "../../types/ShoppingBagTypes";
import { IProduct } from "../../types/ProductTypes";
import usePageTitle from "../../hooks/usePageTitle";
import useReviews from "../../hooks/useReviews";
import Image from "../Image";
import AddToCart from "../AddToCart";
import ProductReviews from "../ProductReviews";
import ProductReviewStars from "../ProductReviewStars";

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
      <ProductTags>
        <ul>
          {product?.tags.map((tag) => (
            <li key={tag}> {tag} </li>
          ))}
        </ul>
      </ProductTags>
      <h1>{product?.title}</h1>
      <p>{product?.description}</p>
      <GridContainer>
        {product && (
          <Image
            src={product?.image.url}
            alt={product?.image.alt}
            width="100%"
          />
        )}
        <ProductDetailContainer>
          <h3>Product ID:</h3>
          <p>{product?.id}</p>
          <h3>Price:</h3>
          <p>
            {product?.discountedPrice !== product?.price
              ? product?.discountedPrice
              : product?.price}
          </p>
          <h3>Rating:</h3>
          <ProductReviewStars rating={averageRating} />
          <AddToCart itemAdded={handleAddToCart} />
        </ProductDetailContainer>
        <ReviewsContainer>
          <ProductReviews reviews={reviews} averageRating={averageRating} />
        </ReviewsContainer>
      </GridContainer>
    </div>
  );
}

async function fetchData(id: string): Promise<IProduct> {
  const data = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
  const response = await data.json();
  return response.data;
}
