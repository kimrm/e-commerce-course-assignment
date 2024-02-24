import { useState, useEffect } from "react";
import ShoppingBagContext from "../contexts/ShoppingBagContext";
import {
  ShoppingBag,
  ShoppingBagItem,
  ShoppingBagContextValue,
} from "../types/ShoppingBagTypes";

interface ShoppingBagProviderProps {
  children: React.ReactNode;
}

export default function ShoppingBagProvider(props: ShoppingBagProviderProps) {
  const { children } = props;
  const [shoppingBag, setShoppingBag] = useState<ShoppingBag>({
    items: [],
    total: 0,
  });
  const contextValue: ShoppingBagContextValue = {
    shoppingBag,
    addItemToShoppingBag,
  };

  useEffect(() => {
    const savedShoppingBag = localStorage.getItem("shoppingBag");
    if (savedShoppingBag) {
      setShoppingBag(JSON.parse(savedShoppingBag));
    }
  }, []);

  function addItemToShoppingBag(item: ShoppingBagItem) {
    const newShoppingBag = {
      ...shoppingBag,
      items: shoppingBag.items.concat(item),
      total: shoppingBag.total + item.price,
    };
    setShoppingBag(newShoppingBag);
    localStorage.setItem("shoppingBag", JSON.stringify(newShoppingBag));
  }

  return (
    <ShoppingBagContext.Provider value={contextValue}>
      {children}
    </ShoppingBagContext.Provider>
  );
}
