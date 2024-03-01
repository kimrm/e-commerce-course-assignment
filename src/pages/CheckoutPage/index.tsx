import { useStore } from "../../store/store";
import { motion } from "framer-motion";

export default function CheckoutPage() {
  const bagItems = useStore((state) => state.bagItems);
  const removeItemFromBag = useStore((state) => state.removeItemFromBag);

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
    </div>
  );
}
