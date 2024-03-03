import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  ShoppingBagButton,
  ShoppingBagContainer,
  ShoppingBagPopup,
  BackDrop,
} from "./ShoppingBag.styles";
import ShoppingBagItem from "./ShoppingBagItem";
import { Link } from "react-router-dom";
import { useStore } from "../../store/store";
import useCartTotal from "../../hooks/useCartTotal";

export default function ShoppingBag() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const controls = useAnimation();
  const backDropControls = useAnimation();
  const bagItems = useStore((state) => state.bagItems);
  const total = useCartTotal();

  useEffect(() => {
    controls.start({ opacity: 1, scale: [0.5, 1] });
  }, [bagItems, controls]);

  function handleButtonClick() {
    setIsPopupVisible((prev) => !prev);
  }

  function handleCheckoutClick() {
    setIsPopupVisible(false);
  }

  useEffect(() => {
    addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setIsPopupVisible(false);
      }
    });
  }, []);

  useEffect(() => {
    if (isPopupVisible) {
      backDropControls.start({ opacity: 1, scale: 1 });
    } else {
      backDropControls.start({ opacity: 0, scale: 0 });
    }
  }, [isPopupVisible, backDropControls]);

  return (
    <>
      <BackDrop
        as={motion.div}
        initial={{ opacity: 0, scale: 0 }}
        animate={backDropControls}
        transition={{ duration: 0.1 }}
        onClick={handleButtonClick}
      />
      <ShoppingBagContainer>
        <ShoppingBagButton
          as={motion.button}
          animate={controls}
          transition={{ duration: 0.5 }}
          onClick={handleButtonClick}
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
          <span>
            {bagItems.reduce((acc, curr) => {
              return acc + curr.quantity;
            }, 0)}
          </span>
        </ShoppingBagButton>

        {isPopupVisible && (
          <ShoppingBagPopup>
            <Link
              onClick={handleCheckoutClick}
              to={"/checkout"}
              className="link"
            >
              Go to Checkout
            </Link>
            <h3>Your Cart</h3>
            {bagItems.map((item) => (
              <ShoppingBagItem key={item.id} item={item} />
            ))}
            <div className="total">Total: {total}</div>
          </ShoppingBagPopup>
        )}
      </ShoppingBagContainer>
    </>
  );
}
