import { useContext } from "react";
import ProductCard from "../ProductCard";
import ProductsContext from "../../contexts/ProductsContext";
import ShoppingBagContext from "../../contexts/ShoppingBagContext";
import { IProduct } from "../../types/ProductTypes";
import {
  IShoppingBagContextValue,
  IShoppingBagItem,
} from "../../types/ShoppingBagTypes";
import { ProductsList } from "./ProductsIndex.styles";

export default function ProductsIndex() {
  const contextValue = useContext(ProductsContext);
  const { addItemToShoppingBag } =
    useContext<IShoppingBagContextValue>(ShoppingBagContext);

  if (contextValue === null) {
    return <div>Loading...</div>;
  }

  const { products } = contextValue;

  function handleAddToCart(product: IProduct, quantity: number = 1) {
    const item: IShoppingBagItem = {
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: quantity,
    };
    addItemToShoppingBag(item);
  }

  return (
    <ProductsList>
      {products.map((product: IProduct) => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </ProductsList>
  );
}
