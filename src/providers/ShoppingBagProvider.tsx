import { useState, useEffect, useMemo } from "react";
import ShoppingBagContext from "../contexts/ShoppingBagContext";
import {
  IShoppingBag,
  IShoppingBagItem,
  IShoppingBagContextValue,
} from "../types/ShoppingBagTypes";

interface IShoppingBagProviderProps {
  children: React.ReactNode;
}

export default function ShoppingBagProvider(props: IShoppingBagProviderProps) {
  const { children } = props;
  const [shoppingBag, setShoppingBag] = useState<IShoppingBag>({
    items: [],
    total: 0,
  });

  const contextValue: IShoppingBagContextValue = useMemo(() => {
    function addItemToShoppingBag(item: IShoppingBagItem) {
      const existingItemIndex = shoppingBag.items.findIndex(
        (existingItem) => existingItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        // Item already exists in the shopping bag, update its quantity
        const updatedItems = [...shoppingBag.items];
        updatedItems[existingItemIndex].quantity += item.quantity;

        const newShoppingBag = {
          ...shoppingBag,
          items: updatedItems,
          total: parseFloat(
            (shoppingBag.total + item.price * item.quantity).toFixed(2)
          ),
        };

        setShoppingBag(newShoppingBag);
        localStorage.setItem("shoppingBag", JSON.stringify(newShoppingBag));
      } else {
        // Item is not present in the shopping bag, add it
        const newShoppingBag = {
          ...shoppingBag,
          items: shoppingBag.items.concat(item),
          total: parseFloat(
            (shoppingBag.total + item.price * item.quantity).toFixed(2)
          ),
        };

        setShoppingBag(newShoppingBag);
        localStorage.setItem("shoppingBag", JSON.stringify(newShoppingBag));
      }
    }

    return { shoppingBag, addItemToShoppingBag };
  }, [shoppingBag, setShoppingBag]);

  useEffect(() => {
    const savedShoppingBag = localStorage.getItem("shoppingBag");
    if (savedShoppingBag) {
      setShoppingBag(JSON.parse(savedShoppingBag));
    }
  }, []);

  return (
    <ShoppingBagContext.Provider value={contextValue}>
      {children}
    </ShoppingBagContext.Provider>
  );
}
