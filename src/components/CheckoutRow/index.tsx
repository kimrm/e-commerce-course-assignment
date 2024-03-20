import { IShoppingBagItem } from "../../types/ShoppingBagTypes";
import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "./index.style";

interface CheckoutRowProps {
  item: IShoppingBagItem;
  handleRemoveItem: (item: IShoppingBagItem) => void;
  handleUpdateQuantity: (item: IShoppingBagItem, quantity: number) => void;
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

    console.log("Updating item in shopping bag", item, newValue);

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
        <img id="image" src={item.productImage} width={100} height={100}></img>
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
          onChange={handleUpdateQuantityChange}
        />
      </div>
      <div id="price">${(item.quantity * item.price).toFixed(2)}</div>
      <button
        id="remove"
        onClick={handleRemoveItemClick}
        style={{
          display: "inline-block",
          width: "fit-content",
          backgroundColor: "red",
          color: "white",
          padding: "0.5rem",
          borderRadius: 5,
          border: "none",
          cursor: "pointer",
        }}
      >
        Remove from cart
      </button>
    </Container>
  );
}
