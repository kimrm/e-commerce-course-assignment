import { createContext } from "react";
import {
  IShoppingBag,
  IShoppingBagContextValue,
} from "../types/ShoppingBagTypes";

const initalShoppingBag: IShoppingBag = {
  items: [],
  total: 0,
};

const ShoppingBagContext = createContext<IShoppingBagContextValue>({
  shoppingBag: initalShoppingBag,
  addItemToShoppingBag: () => {},
});

export default ShoppingBagContext;
