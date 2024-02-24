import React, { useState, useEffect, useMemo } from "react";
import ProductsContext from "../contexts/ProductsContext";
import { Product } from "../types/ProductTypes";

interface ProductsContextValue {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

interface ProductsProviderProps {
  children: React.ReactNode;
}

export default function ProductsProvider(props: ProductsProviderProps) {
  const { children } = props;
  const [products, setProducts] = useState<Product[]>([]);
  const contextValue: ProductsContextValue = useMemo(
    () => ({ products, setProducts }),
    [products]
  );

  useEffect(() => {
    fetch("https://v2.api.noroff.dev/online-shop")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
      });
  }, []);

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
}
