import { create, StateCreator } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ICartItem } from "../types/CartTypes";

export type CartSlice = {
  cartItems: ICartItem[];
  cartTotal: number;
  addItemToCart: (item: ICartItem) => void;
  removeItemFromCart: (item: ICartItem) => void;
  updateItemInCart: (item: ICartItem) => void;
  clearCart: () => void;
};

export const createCartSlice: StateCreator<CartSlice> = (set) => ({
  cartItems: [],
  cartTotal: 0,
  addItemToCart: (item) => set((state) => handleAddItemToCart(state, item)),
  removeItemFromCart: (item) =>
    set((state) => handleRemoveItemFromCart(state, item)),
  updateItemInCart: (item) =>
    set((state) => handleUpdateItemInCart(state, item)),
  clearCart: () => set(handleClearCart),
});

export const useStore = create<CartSlice>()(
  persist(
    (...a) => ({
      ...createCartSlice(...a),
    }),
    {
      name: "state-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

function handleClearCart() {
  return { cartItems: [] };
}

function handleAddItemToCart(state: CartSlice, item: ICartItem) {
  const itemExistsInCart = state.cartItems.find((i) => i.id === item.id);
  if (itemExistsInCart) {
    return {
      cartItems: state.cartItems.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
      ),
    };
  }
  return { cartItems: [...state.cartItems, item] };
}

function handleRemoveItemFromCart(state: CartSlice, item: ICartItem) {
  return { cartItems: state.cartItems.filter((i) => i !== item) };
}

function handleUpdateItemInCart(state: CartSlice, item: ICartItem) {
  return {
    cartItems: state.cartItems.map((i) => (i.id === item.id ? item : i)),
  };
}
