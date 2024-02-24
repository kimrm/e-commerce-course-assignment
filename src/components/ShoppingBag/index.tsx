import { useContext } from "react";
import ShoppingBagContext from "../../contexts/ShoppingBagContext";

export default function ShoppingBag() {
  const contextValue = useContext(ShoppingBagContext);
  const shoppingBag = contextValue?.shoppingBag;

  return (
    <div>
      {shoppingBag?.items.length} items - {shoppingBag?.total}
    </div>
  );
}
