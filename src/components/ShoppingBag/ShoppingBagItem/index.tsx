import { ShoppingBagItem as ShoppingBagItemType } from "../../../types/ShoppingBagTypes";
import { ShoppingBagItemContainer } from "./ShoppingBagItem.styles";

interface ShoppingBagItemProps {
  item: ShoppingBagItemType;
}

export default function ShoppingBagItem(props: ShoppingBagItemProps) {
  const { item } = props;
  return (
    <ShoppingBagItemContainer>
      <input type="number" value={item.quantity} />
      <span>{item.name}</span>
      <span>{item.price * item.quantity}</span>
    </ShoppingBagItemContainer>
  );
}
