import { useContext } from "react";
import { useStore } from "../../store/store";
import { IProduct } from "../../types/ProductTypes";
import { IShoppingBagItem } from "../../types/ShoppingBagTypes";
import { ProductsList } from "./ProductsIndex.styles";
import ProductCard from "../ProductCard";
import ProductsContext from "../../contexts/ProductsContext";

export default function ProductsIndex() {
  const contextValue = useContext(ProductsContext);
  const addItemToBag = useStore((state) => state.addItemToBag);

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
      productImage: product.image?.url,
    };
    addItemToBag(item);
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
