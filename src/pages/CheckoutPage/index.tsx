import { useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store/store";
import { motion } from "framer-motion";
import useCartTotal from "../../hooks/useCartTotal";
import { styled } from "styled-components";

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

  return (
    <div>
      <h1>Order checkout</h1>
      <ul>
        {bagItems.map((item) => (
          <motion.li
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            key={item.id}
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "1fr 2fr 1fr 1fr auto",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#222",
              padding: "1rem",
              borderRadius: 15,
              margin: "1rem 0",
            }}
          >
            {item.productImage ? (
              <img
                src={item.productImage}
                width={100}
                height={100}
                style={{ borderRadius: 15, objectFit: "cover" }}
              ></img>
            ) : (
              <span
                style={{
                  width: 100,
                  height: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  backgroundColor: "gray",
                  borderRadius: 15,
                }}
              >
                No image
              </span>
            )}
            <span>{item.name}</span>
            <span style={{ textAlign: "center" }}>
              Qnt:{" "}
              <input
                type="number"
                value={item.quantity}
                style={{
                  backgroundColor: "#333",
                  color: "#aaa",
                  padding: "0.5rem",
                  borderRadius: 5,
                  border: "none",
                  textAlign: "center",
                  maxWidth: 60,
                }}
              />
            </span>
            <span style={{ textAlign: "right" }}>
              {item.quantity * item.price}
            </span>
            <button
              onClick={() => removeItemFromBag(item)}
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "0.5rem",
                borderRadius: 5,
                border: "none",
                cursor: "pointer",
              }}
            >
              delete
            </button>
          </motion.li>
        ))}
      </ul>
      <div>Cart total: {total}</div>
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
