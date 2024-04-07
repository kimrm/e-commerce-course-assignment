export interface ICartItem {
  id: string;
  name: string;
  productImage: string | undefined;
  price: number;
  quantity: number;
}

export interface ICart {
  items: ICartItem[];
  total: number;
}

export interface ICartContextValue {
  cart: ICart;
  addItemToCart: (item: ICartItem) => void;
  updateItemsInCart: (item: ICartItem) => void;
}
