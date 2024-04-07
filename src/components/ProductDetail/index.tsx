import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";
import usePageTitle from "../../hooks/usePageTitle";
import useReviews from "../../hooks/useReviews";
import { useStore } from "../../store/store";
import { IProduct } from "../../types/ProductTypes";
import { IShoppingBagItem } from "../../types/ShoppingBagTypes";
import AddToCart from "../AddToCart";
import Image from "../Image";
import PriceTag from "../PriceTag";
import ProductReviews from "../ProductReviews";
import {
  GridContainer,
  LoadingContainer,
  ProductDetailContainer,
  ProductTags,
  ReviewsContainer,
} from "./index.styles";

export default function ProductDetail() {
  const { productId } = useParams<string>();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [notify, setNotify] = useState(false);
  const addItemToBag = useStore((state) => state.addItemToBag);

  usePageTitle(product?.title + " | Shop-a-lot");
  const productsContext = useContext(ProductsContext);
  const { products } = productsContext || {};
  const { reviews, averageRating } = useReviews(
    productId ?? "",
    products ?? []
  );

  useEffect(() => {
    if (notify) {
      const timer = setTimeout(() => {
        setNotify(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notify]);

  useEffect(() => {
    fetchData(productId ?? "").then((data) => {
      setProduct(data);
    });
  }, [productId]);

  function handleAddToCart(quantity: number = 1) {
    const item: IShoppingBagItem = {
      id: product?.id ?? "",
      name: product?.title ?? "",
      price:
        product?.discountedPrice !== product?.price
          ? product?.discountedPrice ?? 0
          : product?.price ?? 0,
      quantity: quantity,
      productImage: product?.image?.url,
    };
    if (product) {
      addItemToBag(item);
    }
    setNotify(true);
  }

  return (
    <article>
      {!product && (
        <LoadingContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Loading. Please wait...
        </LoadingContainer>
      )}
      <header>
        <ProductTags>
          <ul>
            <li>
              <Link to="/">All</Link>
            </li>
            {product?.tags.map((tag) => (
              <li key={tag}>
                <Link to={"/" + tag}> {tag}</Link>{" "}
              </li>
            ))}
          </ul>
        </ProductTags>
      </header>
      <section>
        <h1>{product?.title}</h1>
        <p>{product?.description}</p>

        {product && (
          <GridContainer>
            <Image
              src={product?.image.url}
              alt={product?.image.alt}
              width="100%"
            />

            <ProductDetailContainer
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <section className="ProductInfo">
                <ul>
                  <li>
                    <PriceTag
                      price={product?.price ?? 0}
                      discount={product?.discountedPrice ?? 0}
                    />
                  </li>
                  <li>
                    <AddToCart
                      itemAdded={handleAddToCart}
                      displayNotification={notify}
                    />
                  </li>
                  <li>
                    <h3>Product ID:</h3>
                    <p>{product?.id}</p>
                  </li>
                </ul>
              </section>
              <ReviewsContainer>
                <ProductReviews
                  reviews={reviews}
                  averageRating={averageRating}
                />
              </ReviewsContainer>
            </ProductDetailContainer>
          </GridContainer>
        )}
      </section>
    </article>
  );
}

async function fetchData(id: string): Promise<IProduct> {
  const data = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
  const response = await data.json();
  return response.data;
}
