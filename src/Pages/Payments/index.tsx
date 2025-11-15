import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../utils/formatPrice";

const Payments: React.FC = () => {
  const { cart, totalPrice } = useCart();

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState("");

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "SHOP20") {
      setDiscount(0.2); 
      setError("");
    } else {
      setDiscount(0);
      setError("Coupon inválido.");
    }
  };

  const finalTotal = totalPrice - totalPrice * discount;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Order Summary</h1>

     
      {cart.map(item => (
        <div key={item.id} style={{ marginBottom: "20px" }}>
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Price: {formatPrice(item.price)}</p>
          <p>
            Subtotal:{" "}
            <strong>{formatPrice(item.price * item.quantity)}</strong>
          </p>
          <hr />
        </div>
      ))}

  
      <div style={{ marginTop: "20px" }}>
        <h2>Apply Coupon</h2>

        <input
          type="text"
          placeholder="Digite seu cupom"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          style={{
            padding: "8px",
            marginRight: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc"
          }}
        />

        <button onClick={applyCoupon} style={{ padding: "8px 12px" }}>
          Apply
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

      
      <div style={{ marginTop: "30px" }}>
        <h2>Total: {formatPrice(totalPrice)}</h2>

        {discount > 0 && (
          <>
            <p style={{ color: "green" }}>
              Coupon applied: -20%
            </p>

            <h2>
              Final Total: <strong>{formatPrice(finalTotal)}</strong>
            </h2>
          </>
        )}
      </div>
    </div>
  );
};

export default Payments;
