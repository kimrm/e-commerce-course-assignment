import { useState } from "react";
import {
  AddToCartButton,
  AddToCartInput,
  AddToCartContainer,
} from "./AddToCart.styles";

interface AddToCartProps {
  itemAdded: (quantity: number) => void;
}

export default function AddToCart(props: AddToCartProps) {
  const { itemAdded } = props;
  const [quantity, setQuantity] = useState("1");
  return (
    <AddToCartContainer>
      <AddToCartInput
        type="number"
        placeholder="1"
        value={quantity}
        min={1}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <AddToCartButton
        onClick={() => {
          itemAdded(isNaN(parseInt(quantity)) ? 1 : parseInt(quantity));
        }}
      >
        Add to cart
      </AddToCartButton>
    </AddToCartContainer>
  );
}
