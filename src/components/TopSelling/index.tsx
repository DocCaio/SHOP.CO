import styles from "./TopSelling.module.css";
import cardsData from "../../Data/TopSelling.json";
import type { Card } from "../../Types/card";
import type React from "react";
import { formatPrice } from "../../utils/formatPrice";
import { useCart } from "../../context/CartContext";  

const TopSelling: React.FC = () => {

  const { addToCart } = useCart();   

  return (
    <section className={styles.container}>
      <h2>Top Selling</h2>

      <div className={styles.cards}>
        {cardsData.map((card: Card) => (
          <div key={card.id} className={styles.card}>
            <img
              src={card.image}
              alt={card.name}
              className={styles.image}
            />
            <h3>{card.name}</h3>

            <div>
              <span className={styles.price}>
                {formatPrice(card.price)}
              </span>

              <i
                className="bi bi-cart2"
                onClick={() => addToCart(card)}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default TopSelling;
