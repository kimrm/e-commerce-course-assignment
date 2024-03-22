import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store/store";
import { IProduct } from "../../types/ProductTypes";
import { IShoppingBagItem } from "../../types/ShoppingBagTypes";
import { ProductsList } from "./ProductsIndex.styles";
import { ProductsContext } from "../../contexts/ProductsContext";
import { Status } from "../../types/ContextTypes";
import ProductCard from "../ProductCard";
import Modal from "../Modal";
import Image from "../Image";

export default function ProductsIndex() {
  const { products, state } = useContext(ProductsContext) || {};
  const [displayLoader, setDisplayLoader] = useState<boolean>(false);
  const [newCartItem, setNewCartItem] = useState<IShoppingBagItem | null>(null);
  const [cartModalOpen, setCartModalOpen] = useState<boolean>(false);

  const addItemToBag = useStore((state) => state.addItemToBag);

  useEffect(() => {
    let timeOutId: number = 0;
    if (state === Status.PENDING) {
      timeOutId = setTimeout(() => {
        setDisplayLoader(true);
      }, 500);
    } else {
      setDisplayLoader(false);
    }
    return () => {
      clearTimeout(timeOutId);
    };
  }, [state]);

  function handleAddToCart(product: IProduct, quantity: number = 1) {
    const item: IShoppingBagItem = {
      id: product.id,
      name: product.title,
      price:
        product?.discountedPrice !== product?.price
          ? product?.discountedPrice ?? 0
          : product?.price ?? 0,
      quantity: quantity,
      productImage: product.image?.url,
    };
    addItemToBag(item);
    setNewCartItem(item);
    setCartModalOpen(true);
  }
  if (displayLoader) {
    return <div>Fetching our products catalogue. Please hold on...</div>;
  }

  return (
    <div>
      {cartModalOpen && (
        <Modal onClose={() => setCartModalOpen(false)}>
          <h2>{newCartItem?.name}</h2>
          <h3>Has been added to your cart</h3>
          <Image
            src={newCartItem?.productImage || ""}
            alt={newCartItem?.name || ""}
            height="200px"
          />
          <section>
            <p>Amount: {newCartItem?.quantity}</p>
            <p>Total: {newCartItem?.price}</p>
          </section>
          <button className="primary" onClick={() => setCartModalOpen(false)}>
            Continue shopping
          </button>
          <Link to={"/checkout"} className="secondary">
            Go to cart
          </Link>
        </Modal>
      )}
      <ProductsList>
        {products?.map((product: IProduct) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </ProductsList>
    </div>
  );
}
