import { useState } from "react";

export function CouponSection() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <section
      style={{
        padding: "16px",
        background: "#000",
        color: "#fff",
        border: "1px solid #ccc",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto", 
          position: "relative",
        }}
      >
        <button
          onClick={() => setIsVisible(false)}
          style={{
            position: "absolute",
            color:"#fff",
            top: "8px",
            right: "8px",
            border: "none",
            background: "transparent",
            fontSize: "18px",
            cursor: "pointer",
          }}
          aria-label="Fechar"
        >
          ✕
        </button>

        <h3>Use the cupon SHOP20</h3>
      </div>
    </section>
  );
}
