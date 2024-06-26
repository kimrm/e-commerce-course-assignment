import { ICartItem } from "../../types/CartTypes";
import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "./index.style";

interface CheckoutRowProps {
  item: ICartItem;
  handleRemoveItem: (item: ICartItem) => void;
  handleUpdateQuantity: (item: ICartItem, quantity: number) => void;
}

export default function CheckoutRow({
  item,
  handleRemoveItem,
  handleUpdateQuantity,
}: CheckoutRowProps) {
  const [quantity, setQuantity] = useState(item.quantity);

  function handleRemoveItemClick() {
    handleRemoveItem(item);
  }

  function handleUpdateQuantityChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const newValue: number = isNaN(parseInt(event.target.value))
      ? 1
      : parseInt(event.target.value);

    setQuantity(newValue);

    handleUpdateQuantity(item, newValue);
  }

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
    >
      {item.productImage ? (
        <img
          id="image"
          src={item.productImage}
          alt={item.name}
          width={100}
          height={100}
        ></img>
      ) : (
        <div
          id="image"
          style={{
            width: 100,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            backgroundColor: "gray",
            borderRadius: 15,
          }}
        >
          No image
        </div>
      )}
      <div id="name">{item.name}</div>
      <div id="quantity">
        Quantity:{" "}
        <input
          type="number"
          value={quantity}
          aria-label="Item quantity"
          onChange={handleUpdateQuantityChange}
        />
      </div>
      <div id="price">
        <span id="lineTotal">Total: </span>$
        {(item.quantity * item.price).toFixed(2)}
      </div>
      <button
        id="remove"
        onClick={handleRemoveItemClick}
        aria-label="Remove item from shopping cart"
      >
        <svg
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ width: "1rem", height: "1rem" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
    </Container>
  );
}
