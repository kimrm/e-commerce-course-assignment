export interface IShoppingBagItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
export interface IShoppingBag {
  items: IShoppingBagItem[];
  total: number;
}

export interface IShoppingBagContextValue {
  shoppingBag: IShoppingBag;
  addItemToShoppingBag: (item: IShoppingBagItem) => void;
}
