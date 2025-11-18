import { useCart } from "../../context/CartContext";
import styles from "./Button.module.css";
import { useEffect, useState } from "react";

const Button = () => {
  const { totalItems, openCart } = useCart();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (totalItems > 0) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 400);
    }
  }, [totalItems]);

  return (
    <button
      className={`${styles.cartButton} ${animate ? styles.bounce : ""}`}
      onClick={openCart}
    >
      <i className="bi bi-cart2"></i>

      {totalItems > 0 && (
        <span className={styles.badge}>{totalItems}</span>
      )}
    </button>
  );
};

export default Button;
