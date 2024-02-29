import { create, StateCreator } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IShoppingBagItem } from "../types/ShoppingBagTypes";

export type ShoppingBagSlice = {
  bagItems: IShoppingBagItem[];
  bagTotal: number;
  addItemToBag: (item: IShoppingBagItem) => void;
  removeItemFromBag: (item: IShoppingBagItem) => void;
  updateItemInBag: (item: IShoppingBagItem) => void;
};

export const createShoppingBagSlice: StateCreator<ShoppingBagSlice> = (
  set
) => ({
  bagItems: [],
  bagTotal: 0,
  addItemToBag: (item) => set((state) => handleAddItemToBag(state, item)),
  removeItemFromBag: (item) =>
    set((state) => handleRemoveItemFromBag(state, item)),
  updateItemInBag: (item) => set((state) => handleUpdateItemInBag(state, item)),
});

export const useStore = create<ShoppingBagSlice>()(
  persist(
    (...a) => ({
      ...createShoppingBagSlice(...a),
    }),
    {
      name: "state-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

function handleAddItemToBag(state: ShoppingBagSlice, item: IShoppingBagItem) {
  const itemExistsInBag = state.bagItems.find((i) => i.id === item.id);
  if (itemExistsInBag) {
    return {
      bagItems: state.bagItems.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
      ),
    };
  }
  return { bagItems: [...state.bagItems, item] };
}

function handleRemoveItemFromBag(
  state: ShoppingBagSlice,
  item: IShoppingBagItem
) {
  return { bagItems: state.bagItems.filter((i) => i !== item) };
}

function handleUpdateItemInBag(
  state: ShoppingBagSlice,
  item: IShoppingBagItem
) {
  return { bagItems: state.bagItems.map((i) => (i.id === item.id ? item : i)) };
}
