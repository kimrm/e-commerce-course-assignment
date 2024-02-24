export interface ShoppingBagItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
export interface ShoppingBag {
  items: ShoppingBagItem[];
  total: number;
}

export interface ShoppingBagContextValue {
  shoppingBag: ShoppingBag;
  addItemToShoppingBag: (item: ShoppingBagItem) => void;
}
