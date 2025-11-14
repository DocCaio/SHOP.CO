import { useCart } from "../../context/CartContext";
import styles from "./Cart.module.css";
import { formatPrice } from "../../utils/formatPrice";

const Cart = () => {
  const { cart, totalPrice, isOpen, closeCart, removeFromCart, increaseQty, decreaseQty, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <aside className={styles.cart}>
      <button className={styles.closeBtn} onClick={closeCart}>X</button>

      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map(item => (
        <div key={item.id} className={styles.item}>
          <img src={item.image} alt={item.name} />

          <div className={styles.info}>
            <p>{item.name}</p>
            <p>{formatPrice(item.price)}</p>

            <div className={styles.qtyBox}>
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>
          </div>

          <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>
            <i className="bi bi-trash"></i>
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <hr />
          <h3>Total: {formatPrice(totalPrice)}</h3>

          <button className={styles.clearBtn} onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </aside>
  );
};

export default Cart;
