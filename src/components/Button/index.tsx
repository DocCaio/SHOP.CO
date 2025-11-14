import { useCart } from "../../context/CartContext";
import styles from "./Button.module.css";

const Button = () => {
  const { totalItems, openCart } = useCart();

  return (
    <button className={styles.cartButton} onClick={openCart}>
      <i className="bi bi-cart2"></i>
      {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
    </button>
  );
};

export default Button;
