import { createContext } from "react";
import { IProduct } from "../types/ProductTypes";

interface ProductsContextValue {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

const ProductsContext = createContext<ProductsContextValue | null>(null);

export default ProductsContext;
