import { useContext, useEffect, useState } from "react";
import { useStore } from "../../store/store";
import { IProduct } from "../../types/ProductTypes";
import { IShoppingBagItem } from "../../types/ShoppingBagTypes";
import { ProductsList } from "./ProductsIndex.styles";
import ProductCard from "../ProductCard";
import { ProductsContext } from "../../contexts/ProductsContext";
import { Status } from "../../types/ContextTypes";

export default function ProductsIndex() {
  const { products, state } = useContext(ProductsContext) || {};
  const [displayLoader, setDisplayLoader] = useState<boolean>(false);

  const addItemToBag = useStore((state) => state.addItemToBag);

  useEffect(() => {
    let timeOutId: number = 0;
    if (state === Status.PENDING) {
      timeOutId = setTimeout(() => {
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
      price: product.price,
      quantity: quantity,
      productImage: product.image?.url,
    };
    addItemToBag(item);
  }
  if (displayLoader) {
    return <div>Fetching our products catalogue. Please hold on...</div>;
  }
  return (
    <ProductsList>
      {products?.map((product: IProduct) => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </ProductsList>
  );
}
