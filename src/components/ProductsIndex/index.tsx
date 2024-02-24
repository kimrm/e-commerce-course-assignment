import { useContext } from "react";
import ProductCard from "../ProductCard";
import ProductsContext from "../../contexts/ProductsContext";
import ShoppingBagContext from "../../contexts/ShoppingBagContext";
import { Product } from "../../types/ProductTypes";
import {
  ShoppingBagContextValue,
  ShoppingBagItem,
} from "../../types/ShoppingBagTypes";

export default function ProductsIndex() {
  const contextValue = useContext(ProductsContext);
  const { addItemToShoppingBag } =
    useContext<ShoppingBagContextValue>(ShoppingBagContext);

  if (contextValue === null) {
    return <div>Loading...</div>;
  }

  const { products } = contextValue;

  function handleAddToCart(product: Product) {
    const item: ShoppingBagItem = {
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: 1,
    };
    addItemToShoppingBag(item);
  }

  return (
    <>
      {products.map((product: Product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </>
  );
}
