import {
  IShoppingBagItem,
  IShoppingBagContextValue,
} from "../../../types/ShoppingBagTypes";
import { ShoppingBagItemContainer } from "./ShoppingBagItem.styles";
import ShoppingBagContext from "../../../contexts/ShoppingBagContext";

import { useEffect, useState, useContext } from "react";

interface IShoppingBagItemProps {
  item: IShoppingBagItem;
}

export default function ShoppingBagItem(props: IShoppingBagItemProps) {
  const { item } = props;
  const [quantity, setQuantity] = useState(item.quantity);
  const [changeFlag, setChangeFlag] = useState(false);
  const { addItemToShoppingBag } =
    useContext<IShoppingBagContextValue>(ShoppingBagContext);

  useEffect(() => {
    if (changeFlag && quantity !== item.quantity) {
      const newItem: IShoppingBagItem = {
        ...item,
        quantity: quantity,
      };
      addItemToShoppingBag(newItem);
    }
  }, [quantity, item, addItemToShoppingBag, changeFlag]);

  return (
    <ShoppingBagItemContainer>
      <input
        type="number"
        value={item.quantity}
        onKeyDown={() => {
          setChangeFlag((prev) => !prev);
        }}
        onChange={(e) =>
          setQuantity(
            isNaN(parseInt(e.target.value)) ? 1 : parseInt(e.target.value)
          )
        }
      />
      <span>{item.name}</span>
      <span>{item.price * item.quantity}</span>
    </ShoppingBagItemContainer>
  );
}
