import { useState } from "react";
import { IShoppingBagItem } from "../../../types/ShoppingBagTypes";
import { ShoppingBagItemContainer, Row } from "./ShoppingBagItem.styles";
import { useStore } from "../../../store/store";

type ShoppingBagItemProps = {
  item: IShoppingBagItem;
};

export default function ShoppingBagItem(props: ShoppingBagItemProps) {
  const { item } = props;
  const [quantity, setQuantity] = useState(item.quantity);
  const updateItemInBag = useStore((state) => state.updateItemInBag);
  const removeItemFromBag = useStore((state) => state.removeItemFromBag);

  function handleQuantityChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue: number = isNaN(parseInt(e.target.value))
      ? 1
      : parseInt(e.target.value);

    setQuantity(newValue);

    if (newValue !== item.quantity) {
      console.log("Updating item in shopping bag");
      const newItem: IShoppingBagItem = {
        ...item,
        quantity: newValue,
      };
      console.log("New item ", newItem);
      updateItemInBag(newItem);
    }
  }

  function handleDeleteClick() {
    removeItemFromBag(item);
  }

  return (
    <Row>
      <ShoppingBagItemContainer>
        <input type="number" value={quantity} onChange={handleQuantityChange} />
        <span>{item.name}</span>
        <span>{(item.price * item.quantity).toFixed(2)}</span>
      </ShoppingBagItemContainer>
      <button onClick={handleDeleteClick}>Delete item</button>
    </Row>
  );
}
