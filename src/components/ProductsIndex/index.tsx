import { useContext, useEffect, useState } from "react";
import { useStore } from "../../store/store";
import { IProduct } from "../../types/ProductTypes";
import { IShoppingBagItem } from "../../types/ShoppingBagTypes";
import { ProductsList } from "./ProductsIndex.styles";
import { ProductsContext } from "../../contexts/ProductsContext";
import { Status } from "../../types/ContextTypes";
import ProductCard from "../ProductCard";
import Tags from "../Tags";

interface Props {
  tag?: string;
}

export default function ProductsIndex({ tag }: Props) {
  const { products, tags, state } = useContext(ProductsContext) || {};
  const [displayedProducts, setDisplayedProducts] = useState<IProduct[]>(
    products ?? []
  );
  const [displayLoader, setDisplayLoader] = useState<boolean>(false);

  const addItemToBag = useStore((state) => state.addItemToBag);

  useEffect(() => {
    if (tag) {
      const filteredProducts = products?.filter((product: IProduct) =>
        product.tags?.includes(tag)
      );
      setDisplayedProducts(filteredProducts ?? []);
    } else {
      setDisplayedProducts(products ?? []);
    }
  }, [tag, products]);

  useEffect(() => {
    let timeOutId: number = 0;
    if (state === Status.PENDING) {
      timeOutId = window.setTimeout(() => {
        setDisplayLoader(true);
      }, 500);
    } else {
      setDisplayLoader(false);
    }
    return () => {
      clearTimeout(timeOutId);
    };
  }, [state]);

  function handleAddToCart(product: IProduct, quantity: number = 1) {
    const item: IShoppingBagItem = {
      id: product.id,
      name: product.title,
      price:
        product?.discountedPrice !== product?.price
          ? product?.discountedPrice ?? 0
          : product?.price ?? 0,
      quantity: quantity,
      productImage: product.image?.url,
    };
    addItemToBag(item);
  }
  if (displayLoader) {
    return <div>Fetching our products catalogue. Please hold on...</div>;
  }

  return (
    <div>
      {tags && <Tags tags={tags} selectedTag={tag} />}

      <ProductsList>
        {displayedProducts.map((product: IProduct) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </ProductsList>
    </div>
  );
}
