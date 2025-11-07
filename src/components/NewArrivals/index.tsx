import styles from "./NewArrivals.module.css";
import cardsData from "../../Data/NewArrivals.json";
import type React from "react";
import type { Card } from "../../Types/card";

// Helper function to format the price as currency
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD", // Assuming USD based on your previous input
    minimumFractionDigits: 0,
  }).format(price);
};

const NewArrivals: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2>New Arrivals</h2>

      <div className={styles.cards}>
        {/* Map over the card data */}
        {cardsData.map((card: Card) => (
          <div key={card.id} className={styles.card}>
            {/* Added loading="lazy" for performance */}
            <img
              src={card.image}
              alt={card.name}
              className={styles.image}
              loading="lazy"
            />
            <h3>{card.name}</h3>
            {/* Formatted the price for a better display */}
            <span className={styles.price}>
                {formatPrice(card.price)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;