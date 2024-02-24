import { createContext } from "react";
import {
  ShoppingBag,
  ShoppingBagContextValue,
} from "../types/ShoppingBagTypes";

const initalShoppingBag: ShoppingBag = {
  items: [],
  total: 0,
};

const ShoppingBagContext = createContext<ShoppingBagContextValue>({
  shoppingBag: initalShoppingBag,
  addItemToShoppingBag: () => {},
});

export default ShoppingBagContext;
