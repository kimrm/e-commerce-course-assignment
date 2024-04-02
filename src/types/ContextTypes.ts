import { IProduct } from "../types/ProductTypes";

export interface ProductsContextValue {
  products: IProduct[];
  state: Status;
  tags: string[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export enum Status {
  IDLE,
  PENDING,
  RESOLVED,
  REJECTED,
}

export interface ProductsProviderProps {
  children: React.ReactNode;
}
