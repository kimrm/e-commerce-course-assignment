import { createContext } from "react";
import { Product } from "../types/ProductTypes";

interface ProductsContextValue {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductsContext = createContext<ProductsContextValue | null>(null);

export default ProductsContext;
