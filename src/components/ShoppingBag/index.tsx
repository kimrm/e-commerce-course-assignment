import { useContext, useEffect } from "react";
import ShoppingBagContext from "../../contexts/ShoppingBagContext";
import { motion, useAnimation } from "framer-motion";

export default function ShoppingBag() {
  const contextValue = useContext(ShoppingBagContext);
  const shoppingBag = contextValue?.shoppingBag;
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, scale: [0.5, 1] }); // Start the animation
  }, [shoppingBag, controls]); // Trigger animation when shoppingBag changes

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      {shoppingBag?.items.length} items - {shoppingBag?.total}
    </motion.div>
  );
}
