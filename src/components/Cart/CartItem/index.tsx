import { useState } from "react";
import { ICartItem } from "../../../types/CartTypes";
import { CartItemContainer, Row, RemoveButton } from "./index.styles";
import { useStore } from "../../../store/store";

type CartItemProps = {
  item: ICartItem;
};

export default function CartItem(props: CartItemProps) {
  const { item } = props;
  const [quantity, setQuantity] = useState(item.quantity);
  const updateItemInCart = useStore((state) => state.updateItemInCart);
  const removeItemFromCart = useStore((state) => state.removeItemFromCart);

  function handleQuantityChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue: number = isNaN(parseInt(e.target.value))
      ? 1
      : parseInt(e.target.value);

    setQuantity(newValue);

    if (newValue !== item.quantity) {
      const newItem: ICartItem = {
        ...item,
        quantity: newValue,
      };

      updateItemInCart(newItem);
    }
  }

  function handleDeleteClick() {
    removeItemFromCart(item);
  }

  return (
    <Row>
      <CartItemContainer>
        <input
          className="amount-input"
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <img
          className="image"
          src={item.productImage}
          alt={item.name}
          width={24}
          height={24}
        />
        <span className="name">{item.name}</span>
        <span className="price">{(item.price * item.quantity).toFixed(2)}</span>
        <RemoveButton className="remove-button" onClick={handleDeleteClick}>
          <svg
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </RemoveButton>
      </CartItemContainer>
    </Row>
  );
}
