import { useEffect, useState } from "react";
import {
  AddToCartButton,
  AddToCartInput,
  AddToCartContainer,
} from "./AddToCart.styles";
import { motion, useAnimation } from "framer-motion";
import { colors } from "../../config/theme";

const buttonVariants = {
  initial: { backgroundColor: colors.button.primary, scale: 1 },
  hover: { backgroundColor: colors.button.light },
  notification: {
    backgroundColor: colors.button.warning,
    transition: {
      duration: 0.5,
    },
  },
  disabledHover: {},
};

interface AddToCartProps {
  itemAdded: (quantity: number) => void;
  displayNotification?: boolean;
}

export default function AddToCart(props: AddToCartProps) {
  const { itemAdded, displayNotification } = props;
  const [quantity, setQuantity] = useState("1");
  const animationControls = useAnimation();

  useEffect(() => {
    if (displayNotification) {
      animationControls.start("notification");
    } else {
      animationControls.start("initial");
    }
  }, [displayNotification]);

  function handleAddToCart() {
    if (isNaN(parseInt(quantity)) || parseInt(quantity) < 1) {
      return;
    }
    itemAdded(parseInt(quantity));
  }
  return (
    <AddToCartContainer>
      <AddToCartInput
        type="number"
        inputMode="numeric"
        pattern="[1-9]\d*"
        aria-label="Quantity of items to add to cart"
        placeholder="1"
        value={quantity}
        min={1}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <AddToCartButton
        as={motion.button}
        disabled={displayNotification}
        variants={buttonVariants}
        initial="initial"
        whileHover={displayNotification ? "disabledHover" : "hover"}
        animate={animationControls}
        onClick={handleAddToCart}
        title="Add to cart"
      >
        {displayNotification ? "Item added" : "Add to cart"}
      </AddToCartButton>
    </AddToCartContainer>
  );
}
