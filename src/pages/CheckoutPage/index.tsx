import { useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store/store";
import useCartTotal from "../../hooks/useCartTotal";
import { styled } from "styled-components";
import CheckoutRow from "../../components/CheckoutRow";
import { IShoppingBagItem } from "../../types/ShoppingBagTypes";

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  padding: 0.5rem 0;
`;

const LinkStyled = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #ccc;
  }
`;

function CheckOutSuccessPage() {
  return (
    <div>
      <h1>Order placed successfully</h1>
      <p>Thank you for shopping with us.</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic explicabo
        laborum temporibus ex, perferendis, architecto impedit commodi illum
        autem ut velit voluptatem molestias nesciunt. Eius labore aperiam nulla
        dolorem animi!
      </p>
      <h2>Next steps</h2>
      <ul>
        <ListItem>
          <LinkStyled as={Link} to="/">
            Shop for more products
          </LinkStyled>
        </ListItem>
        <ListItem>
          <LinkStyled as={Link} to="/contact">
            Contact us for questions about your order
          </LinkStyled>
        </ListItem>
      </ul>
    </div>
  );
}

export default function CheckoutPage() {
  const bagItems = useStore((state) => state.bagItems);
  const removeItemFromBag = useStore((state) => state.removeItemFromBag);
  const updateItemInBag = useStore((state) => state.updateItemInBag);
  const clearBag = useStore((state) => state.clearBag);
  const total = useCartTotal();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  function checkOutOrder() {
    clearBag();
    setIsOrderPlaced(true);
  }

  if (isOrderPlaced) {
    return <CheckOutSuccessPage />;
  }

  function handleUpdateQuantity(item: IShoppingBagItem, newQuantity: number) {
    const newItem: IShoppingBagItem = {
      ...item,
      quantity: newQuantity,
    };
    updateItemInBag(newItem);
  }

  return (
    <div>
      <h1>Order checkout</h1>
      <p>Here's the content of your shopping cart. </p>
      <List>
        {bagItems.map((item) => (
          <li key={item.id}>
            <CheckoutRow
              item={item}
              handleRemoveItem={() => removeItemFromBag(item)}
              handleUpdateQuantity={(item, quantity) =>
                handleUpdateQuantity(item, quantity)
              }
            />
          </li>
        ))}
      </List>
      <div>Cart total: {total.toFixed(2)}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "1rem",
        }}
      >
        <button
          onClick={checkOutOrder}
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "1rem",
            borderRadius: 5,
            border: "none",
            cursor: "pointer",
          }}
        >
          Place Your Order
        </button>
      </div>
    </div>
  );
}
