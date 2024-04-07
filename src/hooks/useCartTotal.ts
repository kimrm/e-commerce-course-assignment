import { useStore } from "../store/store";

export default function useCartTotal() {
  const cartItems = useStore((state) => state.cartItems);

  return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
}
