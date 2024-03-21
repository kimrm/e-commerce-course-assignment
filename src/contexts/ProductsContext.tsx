import { createContext } from "react";
import { useState, useEffect, useMemo } from "react";
import {
  ProductsProviderProps,
  ProductsContextValue,
  Status,
} from "../types/ContextTypes";
import { IProduct } from "../types/ProductTypes";

export const ProductsContext = createContext<ProductsContextValue | null>(null);

export function ProductsProvider(props: ProductsProviderProps) {
  const { children } = props;
  const [products, setProducts] = useState<IProduct[]>([]);
  const [status, setStatus] = useState(Status.IDLE);
  const contextValue: ProductsContextValue = useMemo(
    () => ({
      products: products,
      state: status,
      setProducts,
    }),
    [products, status]
  );

  useEffect(() => {
    setStatus(Status.PENDING);
    fetch("https://v2.api.noroff.dev/online-shop")
      .then((response) => response.json())
      .then((data) => {
        const computedProducts = computeProducts(data.data);
        setProducts(computedProducts);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setStatus(Status.REJECTED);
      });
  }, []);

  function computeProducts(products: IProduct[]) {
    return products.map((product) => {
      return {
        ...product,
        isDiscounted: product.price !== product.discountedPrice,
      };
    });
  }

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
}
