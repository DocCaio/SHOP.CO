import { useCart } from "../../context/CartContext";
import styles from "./Cart.module.css";
import { formatPrice } from "../../utils/formatPrice";

const Cart = () => {
  const { cart, totalPrice, isOpen, closeCart } = useCart();

  if (!isOpen) return null;

  return (
    <aside className={styles.cart}>
      <button className={styles.closeBtn} onClick={closeCart}>
        X
      </button>

      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className={styles.item}>
          <img src={item.image} alt={item.name} />

          <p>{item.name}</p>

          <p>Qtd: {item.quantity}</p>

          <p>{formatPrice(item.price * item.quantity)}</p>
        </div>
      ))}

      <hr />

      <h3>Total: {formatPrice(totalPrice)}</h3>
    </aside>
  );
};

export default Cart;
