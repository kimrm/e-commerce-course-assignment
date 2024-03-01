import { useStore } from "../../store/store";

export default function CheckoutPage() {
  const bagItems = useStore((state) => state.bagItems);
  return (
    <div>
      <h1>Order checkout</h1>
      <ul>
        <li
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "3fr 1fr 1fr",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#222",
            padding: "1rem",
            borderRadius: 15,
            margin: "1rem 0",
            color: "#aaa",
          }}
        >
          <span>Product</span>
          <span style={{ textAlign: "center" }}>Quantity</span>
          <span style={{ textAlign: "right" }}>Price</span>
        </li>
        {bagItems.map((item) => (
          <li
            key={item.id}
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "1fr 2fr 1fr 1fr",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#222",
              padding: "1rem",
              borderRadius: 15,
              margin: "1rem 0",
            }}
          >
            {item.productImage ? (
              <img src={item.productImage} width={100} height={100}></img>
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
            <span style={{ textAlign: "center" }}>{item.quantity}</span>
            <span style={{ textAlign: "right" }}>
              {item.quantity * item.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
