import { useStore } from "../store/store";

export default function useCartTotal() {
  const bagItems = useStore((state) => state.bagItems);

  return bagItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
}
