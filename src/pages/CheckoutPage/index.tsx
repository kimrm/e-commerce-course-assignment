import { useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store/store";
import useCartTotal from "../../hooks/useCartTotal";
import { styled } from "styled-components";
import CheckoutRow from "../../components/CheckoutRow";
import { IShoppingBagItem } from "../../types/ShoppingBagTypes";
import { colors } from "../../config/theme";
import DeliveryDetails from "../../components/Form/DeliveryDetails";
import ScrollToTop from "../../components/ScrollToTop";

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

const NextButton = styled.button`
  background-color: ${colors.button.primary};
  color: #222;
  font-weight: bold;
  font-size: 1rem;
  padding: 1rem;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.button.light};
  }
`;

function CheckOutSuccessPage() {
  return (
    <>
      <ScrollToTop />
      <div>
        <h1>Order placed successfully</h1>
        <p>Thank you for shopping with us.</p>
        <p>
          Your order is processed and we will contact you shortly to confirm the
          order and delivery details.
        </p>
        <h2>Next steps</h2>
        <List>
          <ListItem>
            <LinkStyled as={Link} to="/">
              Continue shopping
            </LinkStyled>
          </ListItem>
          <ListItem>
            <LinkStyled as={Link} to="/contact">
              Contact us for questions about your order
            </LinkStyled>
          </ListItem>
        </List>
      </div>
    </>
  );
}

export default function CheckoutPage() {
  const bagItems = useStore((state) => state.bagItems);
  const removeItemFromBag = useStore((state) => state.removeItemFromBag);
  const updateItemInBag = useStore((state) => state.updateItemInBag);
  const clearBag = useStore((state) => state.clearBag);
  const total = useCartTotal();
  const [deliveryDetailsActive, setDeliveryDetailsActive] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  function goToDeliveryDetails() {
    setDeliveryDetailsActive(true);
  }

  function checkOutOrder() {
    clearBag();
    setIsOrderPlaced(true);
  }

  if (isOrderPlaced) {
    return <CheckOutSuccessPage />;
  }

  if (deliveryDetailsActive) {
    return <DeliveryDetails onSuccess={checkOutOrder} />;
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
      <ScrollToTop />
      <h1>Order checkout</h1>
      <p>Review your cart and go to delivery to complete the checkout. </p>
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
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginTop: "1rem",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        <span
          style={{
            marginRight: "1rem",
            fontSize: "0.9rem",
            color: "#aaa",
            fontWeight: "normal",
          }}
        >
          {" "}
          Order total:
        </span>{" "}
        ${total.toFixed(2)}
      </div>
      <div>
        <NextButton onClick={goToDeliveryDetails}>
          Go to delivery details
        </NextButton>
      </div>
    </div>
  );
}
