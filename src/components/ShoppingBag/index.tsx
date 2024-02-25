import { useContext, useEffect } from "react";
import ShoppingBagContext from "../../contexts/ShoppingBagContext";
import { motion, useAnimation } from "framer-motion";
import { ShoppingBagContainer } from "./ShoppingBag.styles";

export default function ShoppingBag() {
  const contextValue = useContext(ShoppingBagContext);
  const shoppingBag = contextValue?.shoppingBag;
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, scale: [0.5, 1] });
  }, [shoppingBag, controls]);

  return (
    <ShoppingBagContainer
      as={motion.div}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <svg
        fill="none"
        strokeWidth="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        height={24}
        width={24}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        ></path>
      </svg>
      <span>{shoppingBag?.items.length}</span>
    </ShoppingBagContainer>
  );
}
